export default function Steps({ step }) {
  return (
    <div className="flex justify-between content-start [&>*]:flex [&>*]:aspect-square  [&>*]:rounded-full [&>*]:items-center [&>*]:justify-center [&>*]:text-base [&>*]:h-10">
      <div className={step >= 1 ? "bg-[#7950f2] text-white" : ""}>1</div>
      <div className={step >= 2 ? "bg-[#7950f2] text-white" : ""}>2</div>
      <div className={step >= 3 ? "bg-[#7950f2] text-white" : ""}>3</div>
    </div>
  );
}
