import React from "react";
type Props = {
  progress: number;
};
const ProgressBlock = ({ progress }: Props) => {
  return (
    <div className="w-full h-2.5 bg-gray-200 rounded-full">
      <div
        className="h-2.5 rounded-full"
        style={{
          width: `${progress}%`,
          backgroundColor: "#0084DE",
          transition: "width 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
};

export default ProgressBlock;
