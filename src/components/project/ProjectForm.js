function ProjectForm() {
    return (
        <form >
            <div>
                <input type="text" placeholder="Insira o nome do projeto" />
            </div>
            <div>
                <input type="text" placeholder="Insira o valor do projeto" />
            </div>
            <div>
                <select name="categoria_id">
                    <option disable selected>Selecione sua categoria</option>
                </select>
            </div>
            <div>
                <input type="submit" valeu="Criar projeto" />
            </div>
        </form>
    );
}
export default ProjectForm;