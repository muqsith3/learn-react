import { useState } from "react";
import Buttons from "./Buttons";

export default function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = { id, name, image: `${image}?=${id}`, balance: 0 };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <>
      <form
        action=""
        className="text-lg grid items-center gap-5 bg-[#fff4e6] rounded-lg grid-cols-[1fr_1.5fr] mb-5 p-3"
        onSubmit={handleSubmit}>
        <label for="name" className="justify-self-center">
          Friend Name 👬
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label for="image" className="justify-self-center">
          {" "}
          🌄 Image URL{" "}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Buttons className="col-start-2 justify-self-end">Add</Buttons>
      </form>
    </>
  );
}
