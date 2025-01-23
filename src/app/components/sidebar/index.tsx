import React from "react";
import Navlink from "../nav-link";

const Sidebar = () => {
  return (
    <aside className="bg-zinc-900 p-5 flex flex-col justify-between">
      <div>Logo</div>
      <nav className="flex flex-col">
        <Navlink href="/">Dashboard</Navlink>
        <Navlink href="/tickets">Tickets</Navlink>
        <Navlink href="/teams">Takımlar</Navlink>
        <Navlink href="/inbox">Gelen Kutusu</Navlink>
        <Navlink href="/settings">Ayarlar</Navlink>
        <Navlink href="/statistics">İstatistikler</Navlink>
      </nav>
      <div className="flex flex-col text-gray-500 items-start">
        <button className="px-5 py-2">Yardım Merkezi</button>
        <button className="px-5 py-2">Çıkış Yap</button>
      </div>
    </aside>
  );
};

export default Sidebar;
