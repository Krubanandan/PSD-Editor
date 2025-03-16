import { useEffect, useRef, useState } from "react";
import useStore from "../store/store";

const CanvasEditor = ({ fileData }) => {
  const canvasRef = useRef(null);
  const { setCanvas, addLayer } = useStore();
  const [fabric, setFabric] = useState(null);

  useEffect(() => {
    // Dynamically import fabric.js
    import("fabric").then((fabricModule) => {
      setFabric(fabricModule.fabric);

      const canvas = new fabricModule.fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 600,
        backgroundColor: "white",
      });

      setCanvas(canvas);

      if (fileData) {
        fileData.layers.forEach((layer) => addLayer(canvas, layer));
      }

      return () => canvas.dispose();
    });
  }, [fileData]);

  return <canvas ref={canvasRef} className="border border-gray-700" />;
};

export default CanvasEditor;
