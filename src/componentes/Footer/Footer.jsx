import './footer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaFacebookSquare, FaInstagram, FaTwitter, FaTwitch, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import {IoGameController } from 'react-icons/io5';

function Footer() {
  return (
        <footer>
            <div className="p_pag">
                <a href=" #" className="p_pag__ico"><IoGameController/></a>
                
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
                        <li className="p_pag__contact__font"> <FaWhatsapp/>112345678</li>
                        <li className="p_pag__contact__font"><FaPhoneAlt/> 0810-777-762</li>
                    </ul>
                </div>

                <div className="p_pag__redes">
                        <ul>
                            <li><a href="https://www.instagram.com/" target="_blank "> <FaInstagram/> Instagram</a></li>
                            <li><a href="https://www.twitch.tv/" target="_blank "> <FaTwitch/> Twitch</a></li>
                            <li><a href="https://es-la.facebook.com/" target="_blank "><FaFacebookSquare/> Facebook</a></li>
                            <li><a href="https://twitter.com/?lang=es" target="_blank "> <FaTwitter/> Twitter</a></li>
                        </ul>
                </div>            

            </div>

            <div className="copy"> <p className="copy">© derechos reservados 2022 - <a href="https://github.com/Macarena-Barboza">Macarena Barboza <FaGithub/></a></p></div>
        </footer>
  )
}

export default Footer