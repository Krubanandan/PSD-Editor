import React, { useState, useEffect } from "react";
import { PDFDocument } from "pdf-lib";

const AiEpsViewer = ({ file }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const parseAiEps = async () => {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);
      const pages = pdfDoc.getPages();
      const image = await pages[0].render();
      setImageSrc(image.toDataURL());
    };

    parseAiEps();
  }, [file]);

  return (
    <div>
      {imageSrc ? <img src={imageSrc} alt="AI/EPS Preview" /> : <p>Loading...</p>}
    </div>
  );
};

export default AiEpsViewer;
