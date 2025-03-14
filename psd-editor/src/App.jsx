import React, { useState } from "react";
import FileUploader from "./components/FileUploader";
import PsdViewer from "./components/PsdViewer";
import AiEpsViewer from "./components/AiEpsViewer";

const App = () => {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const handleFileUpload = (selectedFile) => {
    setFile(selectedFile);
    if (selectedFile.name.endsWith(".psd")) setFileType("psd");
    else if (selectedFile.name.endsWith(".ai") || selectedFile.name.endsWith(".eps"))
      setFileType("ai-eps");
  };

  return (
    <div>
      <h1>File Viewer</h1>
      <FileUploader onFileUpload={handleFileUpload} />
      {file && fileType === "psd" && <PsdViewer file={file} />}
      {file && fileType === "ai-eps" && <AiEpsViewer file={file} />}
    </div>
  );
};

export default App;
