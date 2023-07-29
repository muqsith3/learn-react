export default function Item03({ item, onDeleteItem, onUpdateItem }) {
  return (
    <>
      <li className="flex items-center gap-3">
        <input
          type="checkbox"
          className="accent-[#e5771f] h-5 w-5"
          value={item.packed}
          onChange={() => onUpdateItem(item.id)}
        />
        <span className={item.packed ? "line-through" : ""}>
          {item.quantity}: {item.description}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    </>
  );
}
