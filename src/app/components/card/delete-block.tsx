import React from "react";
import { FaTrash } from "react-icons/fa";
type Props = {
  id: string;
};
const DeleteBlock = ({ id }: Props) => {
  return <FaTrash className="cursor-pointer hover:text-red-500 transition" />;
};

export default DeleteBlock;
