import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>Bem vindo ao <span>gerenciador de projetos</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo</p>
      <LinkButton to="/NewProject" text="Criar projeto" />
      <img src={savings} alt="Genernciador" />
    </section>
  );
}
export default Home;