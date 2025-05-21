import React from 'react';
import { useLocation } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const project = location.state?.project;
  if (!project) return <div>No project data available.</div>;

  const { title, description, projectUrl, image, status } = project;

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6 mt-8 border border-gray-300">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>

      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover rounded mb-4"
        />
      )}

      <p className="mb-2">
        <span className="font-semibold">Description:</span>{' '}
        {description || 'N/A'}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Project URL:</span>{' '}
        {projectUrl ? (
          <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            {projectUrl}
          </a>
        ) : (
          'N/A'
        )}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Status:</span>{' '}
        <span className={`inline-block px-2 py-1 rounded text-white ${status === 'published' ? 'bg-green-600' : 'bg-gray-500'}`}>
          {status}
        </span>
      </p>
    </div>
  );
};

export default ProjectDetails;
