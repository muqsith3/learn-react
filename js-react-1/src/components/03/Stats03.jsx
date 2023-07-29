export default function Stats03({ items }) {
  if (!items.length)
    return (
      <p className="bg-[#76c7ad] text-center font-bold py-8 px-0">
        <em>Start Adding some item to your packing list 🚀 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <>
      <footer className="bg-[#76c7ad] text-center font-bold py-8 px-0">
        <em>
          {percentage == 100
            ? "You got everything! ready to go"
            : ` you have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentage}%)`}
          🧳
        </em>
      </footer>
    </>
  );
}
