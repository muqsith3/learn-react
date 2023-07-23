export default function Order({ closeHour }) {
  return (
    <>
      <div className="flex flex-col items-center gap-6">
        <p>We are Open until {closeHour}:00. come visit us or order online</p>
        <button className="border-none text-inherit text-base bg-[#edc84b] px-8 py-3 rounded-md">
          Order
        </button>
      </div>
    </>
  );
}
