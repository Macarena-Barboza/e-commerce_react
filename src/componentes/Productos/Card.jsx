import Boton from '../Boton/Boton';
import './card.css';

function Card(props) {
  let { precio, titulo, img, descripcion} = props;
  return (
    <div>
      <div className="content">
        <img src={img} alt="producto"/>

        <div className="description">
            <h2>{titulo}</h2>
            <p>{descripcion} </p>
           <h3>${precio}</h3>
        </div>
      <Boton text='ver más'/>
      </div>
    </div>
  )
}

export default Card