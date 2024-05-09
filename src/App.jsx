import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  ReactFlowProvider,
  useNodesState,
  useEdgesState,
  Handle,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    type: "customNode",
    position: { x: 250, y: 5 },
    data: { label: "Initial Node" },
  },
];

const initialEdges = [];

function CustomNode({ id, data }) {
  return (
    <>
      <Handle
        type="target"
        position="top"
        id={`t-${id}`}
        style={{ borderRadius: 0 }}
      />
      <div className="react-flow__node-default">{data.label}</div>
      <Handle
        type="source"
        position="bottom"
        id={`s-${id}`}
        style={{ borderRadius: 0 }}
      />
    </>
  );
}

const nodeTypes = {
  customNode: CustomNode,
};

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onAddNode = useCallback(() => {
    const newNodeId = `${nodes.length + 1}`;
    const newNode = {
      id: newNodeId,
      type: "customNode",
      position: {
        x: Math.random() * window.innerWidth * 0.8,
        y: Math.random() * window.innerHeight * 0.8,
      },
      data: { label: `Node ${newNodeId}` },
    };

    const newEdge = {
      id: `e${newNodeId}-1`,
      source: "1",
      sourceHandle: `s-1`, // Ensure this is the ID of the source handle
      target: newNodeId,
      targetHandle: `t-${newNodeId}`, // Ensure this is the ID of the target handle
      animated: true,
    };

    setNodes((nds) => [...nds, newNode]);
    setEdges((eds) => addEdge(newEdge, eds));
  }, [nodes.length, setNodes, setEdges]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
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
