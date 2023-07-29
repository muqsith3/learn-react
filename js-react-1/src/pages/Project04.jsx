import { useState } from "react";
import Buttons from "../components/04/Buttons";
import FromSplitBill from "../components/04/FormSplitBill";
import FormAddFriend from "../components/04/FormaddFriend";
import Friends from "../components/04/Friends";
import InitialFriends from "../data/InitialFriends";

export default function Project04() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(InitialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <>
      {/* body */}
      <div className="h-screen text-[#495057] flex items-center justify-center relative">
        <div className="min-h-[66vh] grid grid-cols-[34rem_44rem] gap-10 items-start">
          <div className="flex flex-col gap-5">
            <Friends
              friends={friends}
              onSelection={handleSelection}
              selectedFriend={selectedFriend}
              key={friends.id}
            />

            {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

            <div className="self-end items-center">
              <Buttons onClick={handleShowAddFriend}>
                {showAddFriend ? "Close" : "Add Friend"}
              </Buttons>
            </div>
          </div>
          {selectedFriend && (
            <FromSplitBill
              selectedFriend={selectedFriend}
              onSplitBill={handleSplitBill}
            />
          )}
        </div>
      </div>
    </>
  );
}
