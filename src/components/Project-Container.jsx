import Project from './Projects/Project';
import projectList from '../assets/project-list';

function ProjectContainer() {
  return <Project projects={projectList} />;
}

export default ProjectContainer;
