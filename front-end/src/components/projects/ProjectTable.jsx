import { useDispatch } from "react-redux";
import { showConfirmAlert, showErrorAlert, showSuccessAlert } from "../common/Alert";
import ProjectActions from "./ProjectActions";
import { useNavigate } from "react-router-dom";
import { deleteProject } from "../../redux/features/projects/projectsSlice";

const ProjectTable = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleDeleteProject = async (id) => {
    try {
       const result = await showConfirmAlert();
       if(result && result?.isConfirmed) {
          await dispatch(deleteProject(id)).unwrap();
          showSuccessAlert("Project is deleted successfully.");
       }
    } catch(error) {
        showErrorAlert("Failed to delete the project.");
    }
  };

  const handleUpdateProject = (project) => {
    navigate('/update-project', { state: { project } });
  };

  const handleViewProjectDetails = (project) => {
    navigate('/project-details', { state: { project } });
  };

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Title</th>
            <th className="py-2 px-4 text-left">Description</th>
            <th className="py-2 px-4 text-left">Project Url</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="py-2 px-4">{item.title}</td>
              <td className="py-2 px-4">{item.description}</td>
              <td className="py-2 px-4">{item.projectUrl}</td>
              <td className="py-2 px-4 capitalize">{item.status}</td>
              <td className="py-2 px-4 text-center">
                <ProjectActions
                  onView={() => handleViewProjectDetails(item)}
                  onEdit={() => handleUpdateProject(item)}
                  onDelete={() => handleDeleteProject(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
