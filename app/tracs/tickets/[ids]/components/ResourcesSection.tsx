// app/components/ResourcesSection.tsx

import React from "react";

interface ResourceItem {
  id: string;
  title: string;
  url: string;
}

interface ResourcesSectionProps {
  resources: ResourceItem[];
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ resources }) => {
  return (
    <div>
      <h3>Resources</h3>
      <ul style={styles.list}>
        {resources.map((resource) => (
          <li key={resource.id} style={styles.item}>
            <a
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.link}
            >
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  list: {
    listStyleType: "none",
    padding: "0",
  },
  item: {
    marginBottom: "10px",
  },
  link: {
    color: "#00bfff",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default ResourcesSection;
