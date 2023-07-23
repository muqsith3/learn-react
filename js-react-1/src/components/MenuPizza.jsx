import Pizza from "./Pizza";
import pizzaData from "../data/pizzaData.js";

export default function MenuPizza() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <>
      <main className="flex flex-col items-center gap-10">
        <h2 className="inline-block py-3 px-0 border-y-2 border-current uppercase text-2xl tracking-tight font-bold">
          Our Menu
        </h2>

        {numPizzas > 0 ? (
          <>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              deleniti quaerat adipisci magni delectus sed aspernatur optio
              natus,
            </p>
            <ul className="list-none grid grid-cols-2 gap-12">
              {pizzas.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
              ))}
            </ul>
          </>
        ) : (
          <p>We are still working on our menu. Please come back later</p>
        )}

        {/* <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          photoName="images/pizza/spinaci.jpg"
          price={10}></Pizza>
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mushrom"
          photoName="images/pizza/funghi.jpg"
          price={15}></Pizza> */}
      </main>
    </>
  );
}
