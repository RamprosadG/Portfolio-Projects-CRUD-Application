import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Project from "../components/projects/Project";
import AddProject from "../components/projects/AddProject";
import UpdateProject from "../components/projects/UpdateProject";
import ProjectDetails from "../components/projects/ProjectDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Project />} />
          <Route path="add-project" element={<AddProject />} />
          <Route path="update-project" element={<UpdateProject />} />
          <Route path="project-details" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
