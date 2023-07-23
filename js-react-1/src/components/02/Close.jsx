export default function Close({ isOpen, setIsOpen }) {
  return (
    <>
      <button
        className="absolute -top-24 right-8 border-none bg-none cursor-pointer text-3xl text-inherit hover:text-[#7950f2]"
        onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
    </>
  );
}
