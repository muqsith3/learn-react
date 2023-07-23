export default function Button({ step, setStep }) {
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="flex justify-between ">
      <button
        className="text-base border-none cursor-pointer font-bold py-4 px-5 rounded-full flex items-center gap-3 bg-[#7950f2] text-white"
        onClick={handlePrevious}>
        previous
      </button>
      <button
        className="text-base border-none cursor-pointer font-bold py-4 px-5 rounded-full flex items-center gap-3 bg-[#7950f2] text-white"
        onClick={handleNext}>
        next
      </button>
    </div>
  );
}
