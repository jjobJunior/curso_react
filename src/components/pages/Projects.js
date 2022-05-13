import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Projects.module.css';
import Loading from '../layout/Loading';
import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [RemoveLoading, setRemoveLoading] = useState(false);
  const [RemoveMessage, setRemoveMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)
      })
      .catch(error => { console.log(error) })
  }, []);

  function removeProject(id) {

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setRemoveMessage('Projeto removido com sucesso!')
      })
      .catch(error => console.log(error))
  }


const location = useLocation();
let message = location.state ? location.state.message : null;

return (
  <div className={styles.project_container}>
    <div className={styles.title_container}>
      <h1>Meus Projetos</h1>
      <LinkButton to="/NewProject" text="Criar Projeto" />
    </div>
    {message && (<Message type="success" msg={message} />)}
    {RemoveMessage && (<Message type="success" msg={RemoveMessage} />)}
    <Container customClass="start">
      {projects.length > 0 &&
        projects.map((project) => (<ProjectCard
          key={project.id}
          id={project.id}
          name={project.name}
          budget={project.budget}
          category={project.category.name}
          handleRemove={removeProject}
        />))}
      {!RemoveLoading && <Loading />}
      {RemoveLoading && !projects.length && <Message type="info" msg="Nenhum projeto encontrado" />}
    </Container>
  </div>
);
}
export default Projects;