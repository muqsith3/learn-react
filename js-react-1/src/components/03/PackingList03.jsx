import { useState } from "react";
import Item03 from "./Item03";

export default function PackingList03({
  items,
  onDeleteItem,
  onUpdateItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <>
      <div className="bg-[#5a3e2b] text-[#ffebb3] py-10 px-0 flex justify-between flex-col gap-8 items-center ">
        <ul className="list-none w-4/5 overflow-y-scroll grid grid-cols-ul03 gap-3 content-center justify-center">
          {sortedItems.map((item) => (
            <Item03
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateItem}></Item03>
          ))}
        </ul>

        <div className="py-2 px-6 text-lg font-bold uppercase my-0 mx-2">
          <select
            name=""
            id=""
            className="bg-[#ffebb3] text-[#5a3e2b] border-none rounded-full py-3 px-8 font-bold text-lg cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button
            className="bg-[#ffebb3] text-[#5a3e2b] border-none rounded-full py-3 px-8 font-bold text-lg cursor-pointer ml-5"
            onClick={onClear}>
            Clear list
          </button>
        </div>
      </div>
    </>
  );
}
