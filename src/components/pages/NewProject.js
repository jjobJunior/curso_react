import { useNavigate  } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {
    const history = useNavigate ()

    function createPost(project) {
        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => { console.log(data); 
                history('/Projects', {message: 'Projeto criado com sucesso!'})
            })
            .catch((error) => console.log(error))
    }
    return (
        <div className={styles.newproject__container}>
            <h1>Crie seu Projeto</h1>
            <p>Crie ja seu projeto para depois adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}
export default NewProject;