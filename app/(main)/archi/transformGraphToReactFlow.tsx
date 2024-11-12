export const transformDataToReactFlow = (data) => {
  const { nodes, edges } = data;
  const ySpacing = 80; // Vertical spacing between siblings
  const basePadding = 40; // Base padding around each node to prevent crowding
  const characterWidth = 8; // Approximate width of each character in pixels

  // Step 1: Calculate each node's width based on node_name length and padding
  const nodeWidths = nodes.map(
    (node) => node.node_name.length * characterWidth + basePadding,
  );

  // Step 2: Find the maximum width from all calculated node widths
  const maxNodeWidth = Math.max(...nodeWidths);

  // Step 3: Set xSpacing based on max node width plus some additional buffer
  const xSpacing = maxNodeWidth + 50; // buffer to ensure extra space between levels

  // Create a dictionary for easier lookup of children by parent node
  const nodeDict = nodes.reduce((acc, node) => {
    acc[node.node_code] = node;
    return acc;
  }, {});

  // Dictionary to keep track of sibling counts for each level
  const levelOrder = {}; // Track sibling order by level

  // Determine nodes that have children by checking which nodes appear as sources in edges
  const nodesWithChildren = new Set(edges.map((edge) => edge.source));

  // Helper function to calculate position based on level and sibling index
  const calculatePosition = (level, siblingIndex) => ({
    x: level * xSpacing,
    y: siblingIndex * ySpacing,
  });

  // Transform nodes for React Flow
  const reactFlowNodes = nodes.map((node) => {
    // Determine the level of the node from node data
    const level = node.node_level;

    // Increment sibling count for this level and get the index for this node
    levelOrder[level] = (levelOrder[level] || 0) + 1;
    const siblingIndex = levelOrder[level] - 1;

    // Calculate the position for this node
    const position = calculatePosition(level, siblingIndex);

    return {
      id: node.node_code, // Unique identifier for the node
      type: "graphnode", // Custom type for the node
      data: {
        label: node.node_name,
        description: node.node_description,
        type: node.node_type,
        isRoot: node.parent_node === null, // Root node if it has no parent
        isLeaf: !nodesWithChildren.has(node.node_code), // Leaf node if it has no children
      },
      position: position, // Calculated position based on level and sibling index
    };
  });

  // Transform edges for React Flow
  const reactFlowEdges = edges.map((edge, index) => ({
    id: `edge-${index}`, // Unique identifier for the edge
    source: edge.source, // Source node ID
    target: edge.target, // Target node ID
    label: "edge", // Edge label, can be customized
    type: "graphedge", // Custom type for the edge
    animated: false, // Animation off for now
  }));

  return { nodes: reactFlowNodes, edges: reactFlowEdges };
};
