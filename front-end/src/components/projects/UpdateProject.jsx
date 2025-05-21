import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../common/Loader";
import { updateProject } from "../../redux/features/projects/projectsSlice";
import { showErrorAlert, showSuccessAlert } from "../common/Alert";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateProject = () => {
  const location = useLocation();
  const initialData = location.state?.project || {}; // get project data from location state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState("draft");
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.projects);
  const navigate = useNavigate();

  // Initialize form fields from initialData once on mount
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");
      setDescription(initialData.description || "");
      setProjectUrl(initialData.projectUrl || "");
      setImage(initialData.image || null);
      setImagePreview(initialData.image || null); // Assuming initialData.image is base64 string
      setStatus(initialData.status || "draft");
    }
  }, [initialData]);

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!image) newErrors.image = "Image is required";
    return newErrors;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // base64 string
        setImagePreview(reader.result); // preview the base64 image
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = {
      title,
      description,
      projectUrl,
      image,
      status,
    };

    try {
      await dispatch(updateProject({id: initialData.id, data})).unwrap();
      showSuccessAlert("Project is updated successfully.");
      navigate("/");
    } catch (error) {
      showErrorAlert("Failed to update project.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border border-gray-300">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Update Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Project URL */}
          <div>
            <label className="block font-medium mb-1">Project URL</label>
            <input
              type="text"
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            />
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-1">
              Image <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image}</p>
            )}
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-2 w-full h-40 object-cover rounded"
              />
            )}
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            {isLoading ? <Loader /> : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProject;
