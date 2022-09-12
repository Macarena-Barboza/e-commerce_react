import './footer.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
        <footer>
            <div className="p_pag">
                <div>Logo</div>
                <div className="p_pag__acerca">
                    <ul>
                        <li><a href="# " className="p_pag__link">Soporte</a></li>
                        <li><a href="# " className="p_pag__link">Terminos y condiciones</a></li>
                        <li><a href="# " className="p_pag__link">Políticas de privacidad</a></li>
                        <li><a href="# " className="p_pag__link">Término del servicio</a></li>
                        <li><a href="# " className="p_pag__link">Acerca de nosotros</a></li>
                    </ul>
                </div>

                <div className="p_pag__ayuda">
                    <ul>
                        <li><a href="# " className="p_pag__link">¿Cómo comprar?</a></li>
                        <li><a href="# " className="p_pag__link">Sucursales</a></li>
                        <li><a href="# " className="p_pag__link">Pagos y promociones</a></li>
                        <li><a href="# " className="p_pag__link">Entregas</a></li>
                        <li><a href="# " className="p_pag__link">Cambios</a></li>
                    </ul>
                </div>

                <div className="p_pag__contact">
                    <ul>
                        <li className="p_pag__contact__font">Lunes a Viernes de 9 a 20 hs</li>
                        <li className="p_pag__contact__font"> <FontAwesomeIcon icon={faEnvelope}/> supergames@gmail.com</li>
                        <li className="p_pag__contact__font"> 112345678</li>
                        <li className="p_pag__contact__font"><FontAwesomeIcon icon={faPhone}/> 0810-777-762</li>
                    </ul>
                </div>

                <div className="p_pag__redes">
                        <ul>
                            <li><a href="https://www.instagram.com/" target="_blank "> <i className="fa-brands faInstagram p_pag__link"></i> Instagram</a></li>
                            <li><a href="https://www.twitch.tv/" target="_blank "><i className="fa-brands fa-twitter p_pag__link"></i> Twitch</a></li>
                            <li><a href="https://es-la.facebook.com/" target="_blank ">Facebook</a></li>
                            <li><a href="https://twitter.com/?lang=es" target="_blank "> Twitter</a></li>
                        </ul>
                </div>            

            </div>

            <div className="copy"> <p className="copy">© derechos reservados 2022 - <a href="https://github.com/Macarena-Barboza">Macarena Barboza</a></p></div>
            {/* <FontAwesomeIcon icon={faGithub} /> */}
        </footer>
  )
}

export default Footer