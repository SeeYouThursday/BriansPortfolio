function Project({ name, github, url, img, description }) {
  return (
    <div className="container">
      <h3>{name}</h3>
      <img
        src={src ? src : ''}
        alt={src ? description : 'Project Coming Soon'}
      />
      <a>{github}</a>
      <a>{url}</a>
    </div>
  );
}

export default Project;
