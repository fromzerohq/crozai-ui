// useFetchGraphData.js

import { useState, useEffect } from "react";
import axios from "axios";
import { transformDataToReactFlow } from "./transformGraphToReactFlow";
import { url } from "inspector";

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
        const url = `https://crozai-service.onrender.com/api/v1/graph/${datasetCode}`;
        const response = await axios.get(url);
        console.log("Response:", response.data);

        const { nodes, edges } = transformDataToReactFlow(response.data);

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
