import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const ProjectActions = ({ onEdit, onDelete, onView }) => {
  return (
    <div className="w-full flex justify-center items-center gap-3">
      <button onClick={onView} className="text-blue-500 hover:scale-110 transition cursor-pointer">
        <FaEye />
      </button>
      <button onClick={onEdit} className="text-green-500 hover:scale-110 transition cursor-pointer">
        <FaEdit />
      </button>
      <button onClick={onDelete} className="text-red-500 hover:scale-110 transition cursor-pointer">
        <FaTrash />
      </button>
    </div>
  );
};

export default ProjectActions;
