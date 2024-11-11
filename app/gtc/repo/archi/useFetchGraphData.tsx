// useFetchGraphData.js

import { useState, useEffect } from "react";
import axios from "axios";
import { transformDataToReactFlow } from "./transformGraphToReactFlow";
import { url } from "inspector";

const localGraphData = {
  nodes: [
    {
      node_code: "node_1",
      parent_node: null,
      node_name: "ms-auth-lib-for-js",
      node_level: 0,
      node_type: "folder",
      node_description: "Microsoft authentication library for JS",
    },
    {
      node_code: "node_2",
      parent_node: "node_1",
      node_name: "samples",
      node_level: 1,
      node_type: "folder",
      node_description: "Root folder containing sample applications",
    },
    {
      node_code: "node_3",
      parent_node: "node_2",
      node_name: "auth-code",
      node_level: 2,
      node_type: "folder",
      node_description: "AuthN and AuthZ, Config, Data, Test...",
    },
    {
      node_code: "node_4",
      parent_node: "node_2",
      node_name: "refresh-token",
      node_level: 2,
      node_type: "folder",
      node_description: "Refresh Token Grant",
    },
    {
      node_code: "node_5",
      parent_node: "node_4",
      node_name: "Config",
      node_level: 3,
      node_type: "folder",
      node_description: "Configuration folder for refresh-token",
    },
    {
      node_code: "node_6",
      parent_node: "node_5",
      node_name: "CustomConfig",
      node_level: 4,
      node_type: "file",
      node_description: "Custom configuration file",
    },
    {
      node_code: "node_7",
      parent_node: "node_4",
      node_name: "msalApp.js",
      node_level: 3,
      node_type: "file",
      node_description:
        "Exchange refresh token for an access token when expired",
    },
    {
      node_code: "node_8",
      parent_node: "node_4",
      node_name: "adalApp.js",
      node_level: 3,
      node_type: "file",
      node_description: "JavaScript file for ADAL app",
    },
    {
      node_code: "node_9",
      parent_node: "node_2",
      node_name: "client-credentials",
      node_level: 2,
      node_type: "folder",
      node_description: "Client Credentials Flow",
    },
    {
      node_code: "node_10",
      parent_node: "node_1",
      node_name: "lib",
      node_level: 1,
      node_type: "folder",
      node_description: "Library folder",
    },
    {
      node_code: "node_11",
      parent_node: "node_1",
      node_name: "extensions",
      node_level: 1,
      node_type: "folder",
      node_description: "Extensions folder",
    },
    {
      node_code: "node_12",
      parent_node: "node_1",
      node_name: "package.json",
      node_level: 1,
      node_type: "file",
      node_description: "Root package configuration file",
    },
  ],
  edges: [
    { source: "node_1", target: "node_2" },
    { source: "node_2", target: "node_3" },
    { source: "node_2", target: "node_4" },
    { source: "node_4", target: "node_5" },
    { source: "node_5", target: "node_6" },
    { source: "node_4", target: "node_7" },
    { source: "node_4", target: "node_8" },
    { source: "node_2", target: "node_9" },
    { source: "node_1", target: "node_10" },
    { source: "node_1", target: "node_11" },
    { source: "node_1", target: "node_12" },
  ],
};

const useFetchGraphData = (datasetCode) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // debugger;
    const fetchData = async () => {
      console.log("Fetching data...");
      try {
        // const url = `https://crozai-service.onrender.com/api/v1/graph/${datasetCode}`;
        // const response = await axios.get(url);
        // console.log("Response:", response.data);

        const { nodes, edges } = transformDataToReactFlow(localGraphData);

        setNodes(nodes);
        setEdges(edges);
      } catch (err) {
        console.error("Failed to fetch data:", err);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [datasetCode]);

  return { nodes, edges, loading, error };
};

export default useFetchGraphData;
