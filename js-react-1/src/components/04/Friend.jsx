import Buttons from "./Buttons";

export default function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <>
      <li
        className={`grid grid-cols-[4.8rem_1fr_auto] hover:bg-[#fff4e6] items-center gap-x-6 p-6 rounded-lg duration-500 ${
          isSelected ? "bg-[#fff4e6]" : ""
        }`}>
        <img
          src={friend.image}
          alt={`image-${friend.name}`}
          className="w-full rounded-full row-span-2"
        />
        <h3 className="row-start-1 col-start-2">{friend.name}</h3>
        {friend.balance < 0 && (
          <p className="text-red-700 row-start-2 col-start-2 text-sm">
            You owe {friend.name} ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance > 0 && (
          <p className="text-green-700 row-start-2 col-start-2 text-sm">
            {friend.name} owe you ${Math.abs(friend.balance)}
          </p>
        )}
        {friend.balance === 0 && (
          <p className=" row-start-2 col-start-2 text-sm">
            You and {friend.name} are even
          </p>
        )}
        <Buttons onClick={() => onSelection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Buttons>
      </li>
    </>
  );
}
