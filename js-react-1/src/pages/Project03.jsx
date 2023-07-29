import { useState } from "react";
import Form03 from "../components/03/Form03";
import Header03 from "../components/03/Header03";
import PackingList03 from "../components/03/PackingList03";
import Stats03 from "../components/03/Stats03";

export default function Project03() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }

  function handleClear() {
    const confirmed = window.confirm("are you sure to delete all items?");

    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="font-semibold font-sans text-2xl text-[#5a3e2b]">
        <div className="grid w-full h-screen grid-rows-[auto_auto_1fr_auto]">
          <Header03></Header03>
          <Form03 onAddItems={handleAddItems}></Form03>
          <PackingList03
            items={items}
            onDeleteItem={handleDeleteItem}
            onUpdateItem={handleUpdateItem}
            onClear={handleClear}></PackingList03>
          <Stats03 items={items}></Stats03>
        </div>
      </div>
    </>
  );
}
