import Button from "../components/02/Button";
import Close from "../components/02/Close";
import Message from "../components/02/Message";
import Steps from "../components/02/Steps";
import { useState } from "react";

export default function Project02() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const messages = [
  //   "Learn React ⚛️",
  //   "Apply for jobs 💼",
  //   "Invest your new income 🤑",
  // ];

  return (
    <>
      <Close isOpen={isOpen} setIsOpen={setIsOpen}></Close>

      {isOpen && (
        <div className="text-[#333] font-sans">
          <div className="bg-[#f7f7f7] w-[600px] rounded-md px-24 py-7 mx-auto my-28">
            <Steps step={step}></Steps>
            <Message step={step}></Message>
            <Button step={step} setStep={setStep}></Button>
          </div>
        </div>
      )}
    </>
  );
}
