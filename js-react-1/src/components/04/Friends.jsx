import Friend from "./Friend";

export default function Friends({ friends, onSelection, selectedFriend }) {
  return (
    <>
      <div className="max-h-[600px] overflow-scroll">
        <ul className="list-none flex flex-col gap-2 text-base mb-5">
          {friends.map((friend) => (
            <Friend
              friend={friend}
              key={friend.id}
              onSelection={onSelection}
              selectedFriend={selectedFriend}></Friend>
          ))}
        </ul>
      </div>
    </>
  );
}
``;
