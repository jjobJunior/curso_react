import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_media}>
                <li >
                    <FaFacebookF />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedinIn />
                </li>
                <li>
                    <FaTwitter />
                </li>
                <li>
                    <FaYoutube />
                </li>
            </ul>
            <p className={styles.copyright}>
                <span>Gerenciador de progetos</span>&copy; 2022
            </p>
        </footer>
    );
}
export default Footer;