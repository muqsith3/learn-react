export default function Buttons({ children, className, onClick }) {
  return (
    <>
      <button
        className={`bg-[#ffa94d] text-[#343a40] py-2 px-5 rounded-md hover:bg-[#ff922b] inline-block ${className}`}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
}
