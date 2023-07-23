export default function Pizza({ pizzaObj }) {
  // console.log(props);
  // if (pizzaObj.soldOut) return null;

  return (
    <>
      <li
        className={`flex gap-8 ${
          pizzaObj.soldOut ? "grayscale opacity-80" : ""
        }`}>
        <img
          src={pizzaObj.photoName}
          alt={pizzaObj.name}
          className="w-32 aspect-auto self-start"
        />
        <div>
          <h2 className="text-xl font-bold">{pizzaObj.name}</h2>
          <p className="text-base font-normal italic mb-auto">
            {pizzaObj.ingredients}
          </p>
          <span className="block text-base">
            {pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}
          </span>
        </div>
      </li>
    </>
  );
}
