import React, { useState, useEffect  } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "./ItemListContainer.scss";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import 'swiper/css/pagination';

function ItemListContainer() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    { 
    loading ?
     <CircularProgress className='loader'/>   
     : 
    (
    <div className="presentacion">
        <div className="presentacion__text">
            <img className="presentacion__img " src="/assets/anthem3.jpg" alt="portada"/>
            <h2 className="presentacion__text__titl" >Encontrá excelentes Juegos de PS5 y PS4</h2>
        </div>
        <div className="swiperContainer">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".pagination",
                    clickable: true,
                }}
                className="slider"
            >
                <SwiperSlide className="slider">
                    <Link to="/productos/amxhxLTnyqfIR3aO8Uewi">
                        <img src="/assets/kena3.jpeg" alt="fantasia" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="slider">
                    <Link to="/productos/dHSB9x5q5E9P7ccngxKNW">
                        <img src="/assets/star-wars3.jpg" alt="aventura" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide className="slider">
                    <Link to="/productos/7woFgJdnlUTJYDxEC5arv">
                        <img src="/assets/hombre-araña5.jpg" alt="accion"  />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link  to="/productos/1VKiukbheE3U7cOTDCuF5">
                        <img src="/assets/hogwarts.jpg" alt="fantasia" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link  to="/productos/mfL00RMZmK3kDO9DnVhK0">
                        <img src="/assets/anthem.png" alt="accion" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link  to="/productos/e3Y5B3hLCPbgnKV92yuE7">
                        <img src="/assets/crysis.jpg" alt="disparos" />
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link  to="/productos/4cOjnleP59pFGYHasBLRG">
                        <img src="/assets/Lost in Random2.png" alt="fantasia"/>
                    </Link>
                </SwiperSlide>
            </Swiper>
            <div className="pagination" />
        </div>

        <section className="avances">
            <div className="avances__princ">
                <img className="avances__princ__img" src="/assets/lichkingclassic.jpg" alt="" />
                <Link to="/productos/sJP7QXYO5lKiAEeqbIN9W">
                    <h4 className="avances__secun__titl">Wrath of the Lich King Classic</h4>
                </Link> 
                <p>El Rey Exánime, Arthas Menethil, se encuentra en la siniestra Ciudadela de la Corona de Hielo y quiere dominar el mundo entero.</p>
            </div>

            <div className="avances__secun">
                <div className="avances__secun__cont">
                    <img className="avances__secun__img" src="/assets/hombre-araña4.png" alt=""/>
                    <Link to="/productos/7woFgJdnlUTJYDxEC5arv" >
                        <h4 className="avances__secun__titl">Spider-Man: Miles Morales</h4>
                    </Link> 
                    <p>Es el nuevo juego de acción y aventura en mundo abierto de Insomniac Games para PlayStation 5.</p>
                </div>

                <div className="avances__secun__cont">
                    <img className="avances__secun__img" src="/assets/kena2.jpg" alt=""/>
                    <Link to="/productos/amxhxLTnyqfIR3aO8Uewi">
                        <h4 className="avances__secun__titl">Kena: Bridge of Spirits</h4>
                    </Link> 

                    <p>Una aventura de acción narrativa que combina la exploración con combates frenéticos.</p>
                </div>
            </div>
        </section>

        <section className="banner">
            <img className="banner__img" src="/assets/joystick.jpg" alt="joystick" />
        </section>
            

    </div>
    )
     }
    </>
  );
}

export default ItemListContainer
