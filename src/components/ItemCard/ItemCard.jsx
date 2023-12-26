import { Link } from "react-router-dom";
import Boton from "../../ejemplos/Boton";

const ItemCard = ({item}) => {

  return (
    <article className="max-w-xs mx-auto mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={item.img} alt={item.name} className="w-full h-40 object-cover"/>
      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
      <hr className="my-2"/>
      <p className="text-sm mb-4">{item.description}</p>
      <p className="text-lg font-bold mb-2">Precio: ${item.price}</p>

      <Boton>
        <Link to={`/item/${item.id}`} className="text-white hover:text-lime-200">Ver más</Link>
      </Boton>
    </article>
  );
};

export default ItemCard;
