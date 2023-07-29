import { useState } from "react";
import Buttons from "./Buttons";

export default function FromSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByFriend) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <>
      <form
        className="text-lg grid items-center gap-5 bg-[#fff4e6] rounded-md grid-cols-2 py-9 px-10"
        onSubmit={handleSubmit}>
        <h2 className="col-span-full uppercase mb-4 text-xl font-bold">
          split a bill with {selectedFriend.name}
        </h2>

        <label for="bill"> 💰 Bill Value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label for="bill"> 🧍 Your expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUser(
              Number(e.target.value) > bill
                ? paidByFriend
                : Number(e.target.value)
            )
          }
        />

        <label for="bill"> 👬 {selectedFriend.name} expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label for="bill"> 🤑 Whos is playing the bill?</label>
        <select
          name=""
          id=""
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>

        <div className="col-start-2 justify-self-end">
          <Buttons>Split bill</Buttons>
        </div>
      </form>
    </>
  );
}
