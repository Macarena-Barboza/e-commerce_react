import React, { useState, useContext } from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import Boton from "../Boton/Boton";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/cartContext";
import { favContext } from "../../Context/favContext";
import { toast } from "react-toastify";
import FormatPrice from "../Productos/Precio";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ReactPlayer from "react-player";


function ItemDetail({ data }) {
    const [quitarCount, setQuitarCount] = useState(false);
    const { addItem } = useContext(cartContext);
    const { addFav } = useContext(favContext);
    const [previewImg, setPreviewImg] = useState(data.img);
    const[favo, setFavo] = useState(false);

    function onAdd(count) {
        addItem(data, count);
        toast(`Agregaste ${count} unidad al Carrito! `, {
            autoClose: 1300,
            theme: "colored",
            hideProgressBar: true,
            style: {
                background: "linear-gradient(19deg, #5ce7ff 0%, #e64e88 100%)",
                borderRadius: "7px",
                fontWeight: "600",
                top: "50px",
                color: "#fff",
                textShadow: "1px 1px 2px rgba(0,0,0,0.386)",
                boxShadow: "0px 0px 10px 1px #75e9f6",
            },
        });
        setQuitarCount(true);
    }
    function onAddFav() {
        addFav(data);
    }

    //     __________________ Rango Estrella ________________________________

    const labels = {
        0.5: "0.5",
        1: "1",
        1.5: "1.5",
        2: "2",
        2.5: "2.5",
        3: "3",
        3.5: "3.5",
        3.8: "3.8",
        4: "4",
        4.5: "4.5",
        4.7: "4.7",
        4.8: "4.8",
        4.9: "4.9",
        5: "5",
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }

    function HoverRating() {
        const [value, setValue] = React.useState(data.reseña);
        const [hover, setHover] = React.useState(-1);

        return (
            <>
                <Box sx={{ width: 200, display: "flex", alignItems: "center" }}>
                    <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                            setHover(newHover);
                        }}
                        emptyIcon={
                            <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                        }
                    />
                    {value !== null && (
                        <Box sx={{ ml: 2 }}>
                            {labels[hover !== -1 ? hover : value]}
                        </Box>
                    )}
                </Box>
            </>
        );
    }
    //     __________________________________________________

    return (
        <div className="producto">
            <div className="producto__img" onClick={() => setPreviewImg(data.img)} >
                <img src={previewImg} alt="" />
            </div>

            <div className="producto__text">
                <div className="producto__tilFav">
                    <h1 className="producto__text__titulo">{data.titulo}</h1>
                    <button className="producto__text__ico" onClick={()=>setFavo(!favo) }> 
                    {favo ? ( <FaHeart className="producto__text__ico__lleno" />) : ( <FaHeart onClick={onAddFav} className="producto__text__ico" />) }
                    </button>
                </div>

                <br />
                <div className="producto__text__cont">
                    <p className="producto__text__precio"> {FormatPrice(data.precio)}</p>
                    <div className="producto__star"> {HoverRating()}</div> 
                </div>
                <p className="producto__text__descrip">{data.descripcion}</p>
                <div className="producto__text__caract">
                    <p>Es para: {data.características}</p>
                    <p>Version para {data.plataforma}</p>
                </div>

                {quitarCount ? (
                    <>
                            <Link to="/carrito" className="producto__btn">
                                <Boton text="Ir al Carrito" ></Boton>
                            </Link>
                            <Link to="/productos" className="producto__btn">
                                <Boton text="Seguir Comprando" ></Boton>
                            </Link>
                    </>
                ) : (
                    <ItemCount initial={1} stock={data.stock} onAddToCart={onAdd}
                    />
                )}
            </div>

            {/* ________________ Imagenes  ________________ */}

            <div className="producto__imges">
                <img className="card__img" src={data.img2} alt={data.titulo} onClick={() => setPreviewImg(data.img2)}/>
                <img className="card__img" src={data.img3} alt={data.titulo} onClick={() => setPreviewImg(data.img3)} />
                <img className="card__img" src={data.img4} alt={data.titulo} onClick={() => setPreviewImg(data.img4)}/>
            </div>

            {/* ________________ Trailer  ________________ */}
            <div className="producto__trailer">
                <ReactPlayer url={data.trailer} />
            </div>
        </div>
    );
}

export default ItemDetail;
