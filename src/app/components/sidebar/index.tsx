import { IoHelpCircleOutline as Help } from "react-icons/io5";
import { LuLogOut as Door } from "react-icons/lu";
import { Smooch_Sans } from "next/font/google";
import { links } from "@/app/utils/constants";
import Navlink from "../nav-link";
import Image from "next/image";

const smooch = Smooch_Sans({
  weight: "900",
  subsets: ["latin"],
});
const Sidebar = () => {
  return (
    <aside className="bg-zinc-900 p-5 flex flex-col justify-between">
      <div className="bg-white rounded-full md:flex md:items-center md:gap-3 max-md:size-10">
        <Image alt="logo" src={"/logo.png"} width={50} height={50} className="max-md:size-10" />
        <span style={smooch.style} className="max-md:hidden text-zinc-800 text-4xl">
          Rudder
        </span>
      </div>
      <nav className="flex flex-col">
        {links.map((item, key) => (
          <Navlink key={key} href={item.href}>
            <div className="flex items-center gap-3 px-3 md:pe-8 py-2 lg:text-lgs">
              <span className="max-md:text-2xl ">{item.icon}</span>
              <span className="max-md:hidden">{item.title}</span>
            </div>
          </Navlink>
        ))}
      </nav>
      <div className="flex flex-col text-gray-500 items-start lg:text-lg">
        <button className="flex items-center gap-2 px-5 py-2">
          <Help className="max-md:text-2xl" />
          <span className="max-md:hidden">Yardım Merkezi</span>
        </button>
        <button className="flex items-center gap-2 px-5 py-2">
          <Door className="max-md:text-xl" />
          <span className="max-md:hidden">Çıkış Yap</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
