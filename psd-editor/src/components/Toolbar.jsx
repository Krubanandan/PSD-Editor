import useStore from "../store/store";

const Toolbar = () => {
  const { undo, redo, clearCanvas } = useStore();

  return (
    <div className="flex space-x-4 mb-4">
      <button onClick={undo} className="bg-blue-500 px-4 py-2 rounded">Undo</button>
      <button onClick={redo} className="bg-green-500 px-4 py-2 rounded">Redo</button>
      <button onClick={clearCanvas} className="bg-red-500 px-4 py-2 rounded">Clear</button>
    </div>
  );
};

export default Toolbar;
