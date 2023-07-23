import Order from "./Order";

export default function FooterPizza() {
  // javascript code
  const hour = new Date().getHours();
  const openHour = 4;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;

  if (!isOpen)
    return (
      <p>
        We're happy to welcome you between{openHour}:00 and {closeHour}:00
      </p>
    );
  return (
    <>
      <footer className="text-base">
        {isOpen ? (
          <Order closeHour={closeHour}></Order>
        ) : (
          <p>
            We're happy to welcome you between{openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    </>
  );
}
