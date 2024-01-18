import Project from './pages/Project';

function ProjectContainer(props) {
  const { name, github, link } = props;
  return (
    <div className="container">
      <Project name={name} github={github} link={link} />
    </div>
  );
}

export default ProjectContainer;
