export default function Message({ step }) {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <>
      <p className="text-center text-lg my-10 mx-0 font-bold flex flex-col items-center">
        Step {step}: {messages[step - 1]}
      </p>
    </>
  );
}
