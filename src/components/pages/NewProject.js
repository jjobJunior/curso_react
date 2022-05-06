import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject (){
    return (
        <div className={styles.newproject__container}> 
            <h1>Crie seu Projeto</h1>
            <p>Crie ja seu projeto para depois adicionar serviços</p>
            <ProjectForm />
        </div>
    );
}
export default NewProject;