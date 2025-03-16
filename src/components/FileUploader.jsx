import React from "react";

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".psd,.ai,.eps" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploader;
