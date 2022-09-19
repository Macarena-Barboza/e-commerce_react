import ItemCount from '../ItemCount/ItemCount';
import './card.scss';


function Card(props) {
  let { precio, titulo, img, descripcion, stock} = props;
  return (
    <div>
      <div className="content">
        <img src={img} alt="producto"/>

        <div className="description">
            <h2>{titulo}</h2>
            <p>{descripcion} </p>
           <h3>${precio}</h3>
        </div>

        <ItemCount initial= {1} stock={stock}/>
      </div>
    </div>
  )
}

export default Card
