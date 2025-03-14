import React, { useState, useEffect } from "react";
import { readPsd } from "ag-psd";

const PsdViewer = ({ file }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const parsePsd = async () => {
      const buffer = await file.arrayBuffer();
      const psd = readPsd(buffer);

      if (psd.canvas) {
        setImageSrc(psd.canvas.toDataURL());
      }
    };

    parsePsd();
  }, [file]);

  return (
    <div>
      {imageSrc ? <img src={imageSrc} alt="PSD Preview" /> : <p>Loading...</p>}
    </div>
  );
};

export default PsdViewer;
