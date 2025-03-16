import { readPsd } from "ag-psd";
import { PDFDocument } from "pdf-lib";

export async function parseFile(file) {
  const buffer = await file.arrayBuffer();
  const extension = file.name.split(".").pop().toLowerCase();

  if (extension === "psd") {
    const psd = readPsd(buffer);
    return {
      type: "psd",
      layers: psd.children.map((layer) => ({
        name: layer.name,
        image: layer.canvas?.toDataURL() || "",
      })),
    };
  }

  if (extension === "ai" || extension === "eps") {
    const pdfDoc = await PDFDocument.load(buffer);
    const image = await pdfDoc.embedPage(0);
    return {
      type: extension,
      layers: [{ name: "Page 1", image: image.toString() }],
    };
  }

  return null;
}
