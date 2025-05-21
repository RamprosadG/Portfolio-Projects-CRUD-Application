import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProjectTable from "./ProjectTable";
import { fetchProjects } from "../../redux/features/projects/projectsSlice";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my work and resume.",
    url: "https://myportfolio.com",
    image: "https://via.placeholder.com/300x200.png?text=Portfolio",
    status: "published",
  },
  {
    id: 2,
    title: "E-commerce App",
    description:
      "A full-stack e-commerce web app with cart and payment gateway.",
    url: "https://shopeasy.com",
    image: "https://via.placeholder.com/300x200.png?text=E-commerce",
    status: "draft",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A blogging platform with markdown support and user authentication.",
    url: "",
    image: "https://via.placeholder.com/300x200.png?text=Blog+Platform",
    status: "published",
  },
  {
    id: 4,
    title: "Weather App",
    description: "",
    url: "https://weatherapp.com",
    image: "https://via.placeholder.com/300x200.png?text=Weather+App",
    status: "draft",
  },
  {
    id: 5,
    title: "Task Manager",
    description: "A React-based task manager with drag-and-drop support.",
    url: "https://tasks.io",
    image: "https://via.placeholder.com/300x200.png?text=Task+Manager",
    status: "published",
  },
];

const Project = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.projects);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      dispatch(fetchProjects(search));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [dispatch, search]);

  return (
    <div className="">
      <div className="flex gap-2 justify-between items-center mb-4">
        <Link
          to="add-project"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Project
        </Link>

        <div className="flex items-center space-x-2">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="border px-4 py-2 rounded w-36 md:w-48"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <ProjectTable data={data} />
    </div>
  );
};

export default Project;
