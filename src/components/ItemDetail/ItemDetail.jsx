import Boton from "../../ejemplos/Boton";


const ItemDetail = ({ item }) => {

  return (
    <div className="container mx-auto mt-8">
      <h3 className="text-3xl font-bold mb-4">{item.name}</h3>
      <hr className="mb-6" />
      <div className="flex gap-8">
        <img src={item.img} alt={item.name} className="w-64 h-64 object-cover" />

        <div>
          <p className="text-lg mb-4">{item.description}</p>
          <p className="text-xl font-bold mb-4">Precio: ${item.price}</p>
        </div>
      </div>

      <Boton className="bg-green-400 hover:text-lime-200">Agregar al carrito</Boton>
    </div>
  );
};

export default ItemDetail;
