// types.ts
export interface NodeData {
  label: string;
}

export interface Node {
  id: string;
  data: NodeData;
  position: { x: number; y: number };
  style: { backgroundColor: string; color: string; borderRadius: string };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}

export interface DependencyGraph {
  nodes: Node[];
  edges: Edge[];
}
