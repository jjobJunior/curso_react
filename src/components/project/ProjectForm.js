import {useState, useEffect} from 'react'
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css';

function ProjectForm({btnText}) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories',
            { method: 'GET',
                headers: {'Contente-Type': 'application/json',
            },
            })
            .then((response) => response.json())
            .then((data) => { setCategories(data) })
            .catch((error) => console.log(error))
        }, [])
    return (
        <form className={styles.form}>
           <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
           <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total"/>
            <Select name="categoria_id" text="Selecione a categoria" options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    );
}
export default ProjectForm;