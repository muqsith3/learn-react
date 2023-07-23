import FooterPizza from "../components/FooterPizza";
import MenuPizza from "../components/MenuPizza";
import Headerpizza from "../components/headerPizza";

export default function Project01() {
  return (
    <>
      <div className="p-16 text-[#252525] min-h-screen font-mono bg-[#f7f2e9] border-b-8 border-[#edc84b] pb-14">
        <div className="max-w-7xl m-auto flex flex-col items-center gap-12">
          <Headerpizza></Headerpizza>
          <MenuPizza></MenuPizza>
          <FooterPizza></FooterPizza>
        </div>
      </div>
    </>
  );
}
