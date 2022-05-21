import styles from '../project/ProjectForm.module.css';
import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ServiceForm({handleSubmit, btnText, projectData}) {
    const [service, setServece] = useState({});

    function submit(e){
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(event) {
        setServece({...service, [event.target.name]: event.target.value});
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome do serviço"
            name="name"
            placeholder="Nome do serviço"
            handleOnChange={handleChange}
            />
             <Input 
            type="number"
            text="Custo do serviço"
            name="cost"
            placeholder="Custo do serviço"
            handleOnChange={handleChange}
            />
             <Input 
            type="text"
            text="Descricao do serviço"
            name="description"
            placeholder="Descricao do serviço"
            handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form >
    );
}
export default ServiceForm;