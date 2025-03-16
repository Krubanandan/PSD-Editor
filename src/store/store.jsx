import { create } from "zustand";

const useStore = create((set) => ({
  canvas: null,
  setCanvas: (canvas) => set({ canvas }),

  addLayer: (canvas, layer) => {
    const img = new Image();
    img.src = layer.image;
    img.onload = () => {
      const fabricImg = new fabric.Image(img);
      canvas.add(fabricImg);
      canvas.renderAll();
    };
  },

  undo: () => {
    console.log("Undo clicked");
  },

  redo: () => {
    console.log("Redo clicked");
  },

  clearCanvas: () => set((state) => {
    state.canvas.clear();
    state.canvas.backgroundColor = "white";
    state.canvas.renderAll();
  }),
}));

export default useStore;
