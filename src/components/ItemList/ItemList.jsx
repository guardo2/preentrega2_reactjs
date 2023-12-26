import ItemCard from "../ItemCard/ItemCard";


const ItemList = ({productos}) => {

  return (
    <section className="container mx-auto mt-8">

      <h2 className="text-3xl font-bold mb-4 text-center mx-auto">Productos</h2>
      <hr className="mb-8" />

        <div className="flex flex-wrap justify-start gap-10 items-center">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;
