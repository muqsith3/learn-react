import { useState } from "react";

export default function Form03({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };

    if (!description) return;
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <>
      <form
        className="bg-[#e5771f] py-6 px-0 flex items-center justify-center gap-2"
        onSubmit={handleSubmit}>
        <h3 className="mr-3 text-3xl">what do you need for your 😍 trip?</h3>
        <select
          name=""
          id=""
          className="bg-[#ffebb3] text-[#5a3e2b] border-none rounded-full py-3 px-8 font-bold text-xl cursor-pointer"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          className="bg-[#ffebb3] texrt-[#5a3e2b] border-none rounded-full py-3 px-8 font-bold text-xl cursor-pointer"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="bg-[#76c7ad] uppercase py-3 px-8 rounded-full font-bold">
          Add
        </button>
      </form>
    </>
  );
}
