export default function Message({ step, children }) {
  // const messages = [
  //   "Learn React ⚛️",
  //   "Apply for jobs 💼",
  //   "Invest your new income 🤑",
  // ];

  return (
    <>
      <p className="text-center text-lg my-10 mx-0 font-bold flex flex-col items-center">
        <h3>Step {step}</h3>
        {children}
      </p>
    </>
  );
}
