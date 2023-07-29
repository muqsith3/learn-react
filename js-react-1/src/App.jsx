import Project01 from "./pages/Project01";
import Project03 from "./pages/Project03";
import Project02 from "./pages/project02";
import Project04 from "./pages/project04";

export default function App() {
  return (
    <>
      <section className="pb-40">
        <Project01></Project01>
      </section>
      <section className="relative pb-40">
        <Project02></Project02>
      </section>
      <section>
        <Project03></Project03>
      </section>
      <section className="py-10">
        <Project04></Project04>
      </section>
    </>
  );
}
// pizza project

// end pizza project

// function Message(props) {
//   return (
//     <p>
//       You have read <strong>{props.count}</strong> pieces of advices
//     </p>
//   );
// }
