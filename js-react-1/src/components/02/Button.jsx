import ButtonComponent from "./ButtonComponent";

export default function Button({ step, setStep }) {
  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <div className="flex justify-between ">
      <ButtonComponent
        textColor="text-white"
        bgColor="[#7950f2]"
        onClick={handlePrevious}>
        <span>⬅️</span> Previous
      </ButtonComponent>
      <ButtonComponent
        textColor="text-white"
        bgColor="[#7950f2]"
        onClick={handleNext}>
        Next <span>➡️</span>
      </ButtonComponent>

      {/* reusable button */}
    </div>
  );
}
