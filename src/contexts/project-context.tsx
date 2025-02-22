"use client";

import React, { createContext, useContext, useState } from 'react';

interface Project {
  id: string;
  title: string;
  slug: string;
  imgLink?: string | null;
  externalLink?: string | null;
  videoLink?: string | null;
  text: string;
  type: string;
  order?: number | null;
  technologies: { name: string }[];
}

interface ProjectContextType {
  projects: Project[];
  orderedProjects: Project[];
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: React.ReactNode; initialProjects: Project[]; orderedProjects: Project[] }> = ({ children, initialProjects, orderedProjects }) => {
  const [projects] = useState<Project[]>(initialProjects);
  const [orderedProjectsState] = useState<Project[]>(orderedProjects);

  return (
    <ProjectContext.Provider value={{ projects, orderedProjects: orderedProjectsState }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
}; 