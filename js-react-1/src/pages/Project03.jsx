import Form03 from "../components/03/Form03";
import Header03 from "../components/03/Header03";
import PackingList03 from "../components/03/PackingList03";
import Stats03 from "../components/03/Stats03";

export default function Project03() {
  return (
    <>
      <div className="font-semibold font-sans text-2xl text-[#5a3e2b]">
        <div className="grid w-full h-screen grid-rows-[auto auto 1fr auto]">
          <Header03></Header03>
          <Form03></Form03>
          <PackingList03></PackingList03>
          <Stats03></Stats03>
        </div>
      </div>
    </>
  );
}
