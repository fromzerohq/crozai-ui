const axios = require("axios");
const fs = require("fs");

// Replace with your GitHub token, owner, and repository name
const GITHUB_TOKEN = "your_github_token";
const OWNER = "owner_name";
const REPO = "repo_name";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

// Fetch repository structure recursively
async function fetchRepoStructure(path = "") {
  const url = `/repos/${OWNER}/${REPO}/contents/${path}`;
  const { data } = await api.get(url);

  const files = [];
  for (const item of data) {
    if (
      item.type === "file" &&
      (item.name.endsWith(".js") || item.name.endsWith(".ts"))
    ) {
      files.push(item.path);
    } else if (item.type === "dir") {
      const dirFiles = await fetchRepoStructure(item.path);
      files.push(...dirFiles);
    }
  }
  return files;
}

// Fetch dependencies from a file
async function fetchDependencies(filePath) {
  const url = `/repos/${OWNER}/${REPO}/contents/${filePath}`;
  const { data } = await api.get(url, {
    headers: { Accept: "application/vnd.github.v3.raw" },
  });

  const dependencies = [];
  const importRegex =
    /(import .* from ['"](.+)['"];)|(require\(['"](.+)['"]\))/g;
  let match;
  while ((match = importRegex.exec(data)) !== null) {
    const dependency = match[2] || match[4];
    dependencies.push(dependency);
  }
  return dependencies;
}

// Build the initialElements structure
async function buildDependencyGraph() {
  const files = await fetchRepoStructure();
  const elements = [];

  const fileIdMap = {};

  // Create nodes
  files.forEach((filePath, index) => {
    const id = `${index + 1}`;
    const fileName = filePath.split("/").pop();
    elements.push({
      id,
      data: { label: fileName },
      position: { x: 50 + index * 150, y: 100 + (index % 5) * 50 }, // Basic positioning
      style: {
        backgroundColor: "#3b82f6",
        color: "white",
        borderRadius: "5px",
      },
    });
    fileIdMap[filePath] = id;
  });

  // Create edges based on dependencies
  for (const filePath of files) {
    const dependencies = await fetchDependencies(filePath);

    dependencies.forEach((dependency) => {
      const depFilePath = files.find(
        (file) =>
          file.endsWith(dependency + ".js") ||
          file.endsWith(dependency + ".ts"),
      );
      if (depFilePath && fileIdMap[depFilePath]) {
        elements.push({
          id: `e${fileIdMap[filePath]}-${fileIdMap[depFilePath]}`,
          source: fileIdMap[filePath],
          target: fileIdMap[depFilePath],
          animated: true,
        });
      }
    });
  }

  fs.writeFileSync("dependencyGraph.json", JSON.stringify(elements, null, 2));
  console.log("Dependency graph created: dependencyGraph.json");
}

buildDependencyGraph().catch((error) =>
  console.error("Error building graph:", error),
);
