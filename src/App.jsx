import { useState } from "react";
import CanvasEditor from "./components/CanvasEditor";
import Toolbar from "./components/Toolbar";
import { parseFile } from "./utils/fileParser";

function App() {
  const [file, setFile] = useState(null);

  const handleFileUpload = async (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const parsedData = await parseFile(uploadedFile);
      setFile(parsedData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-2xl font-bold mb-4">PSD, AI, EPS Web Editor</h1>
      <input type="file" onChange={handleFileUpload} className="mb-4" />
      <Toolbar />
      {file && <CanvasEditor fileData={file} />}
    </div>
  );
}

export default App;
