import React, { JSX } from "react";

type Props = {
  value: number | string;
  title: string;
  icon: JSX.Element;
};

const DashboardValue = ({ value, title, icon }: Props) => {
  return (
    <div className="bg-zinc-700 p-5 border border-zinc-800 whitespace-nowrap  lg:p-10 text-zinc-300 flex lg:flex-1 justify-between items-center">
      <div>
        <h1 className="text-4xl font-bold">{value}</h1>
        <p className="font-semibold">{title}</p>
      </div>
      <span className="text-5xl">{icon}</span>
    </div>
  );
};

export default DashboardValue;
