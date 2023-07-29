export default function ButtonComponent({
  textColor,
  bgColor,
  onClick,
  children,
}) {
  return (
    <>
      <button
        className={`text-base border-none cursor-pointer font-bold py-4 px-5 rounded-full flex items-center gap-3 bg-${bgColor} ${textColor}`}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
}
