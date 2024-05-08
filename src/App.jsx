import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";

// Initial nodes setup
const initialNodes = [
  {
    id: "1",
    type: "default",
    position: { x: 250, y: 5 },
    data: { label: "Initial Node" },
  },
];

// Initial edges setup, if any
const initialEdges = [];

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Handler to add new node and edge
  const onAddNode = () => {
    const newNodeId = `${nodes.length + 1}`; // Generate a new ID based on length
    const newNode = {
      id: newNodeId,
      type: "default",
      position: {
        x: Math.random() * 400, // Random position for demonstration
        y: Math.random() * 400,
      },
      data: { label: `Node ${newNodeId}` },
    };

    const newEdge = {
      id: `e${newNodeId}-1`,
      source: "1",
      target: newNodeId,
      animated: true,
    };

    setNodes((nds) => [...nds, newNode]); // Add new node
    setEdges((eds) => [...eds, newEdge]); // Connect new node with the first one
  };
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          fitView
        >
          <button
            style={{ position: "absolute", right: 20, top: 10, zIndex: 100 }}
            onClick={onAddNode}
          >
            Add Node
          </button>
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
