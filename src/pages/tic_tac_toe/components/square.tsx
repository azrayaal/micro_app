import { useState } from "react";

export interface SquareProps {
  value: number;
}

// export default function Square(props: SquareProps) {
export default function Square() {
  //   const { value } = props;
  const [value, setValue] = useState<string | null>(null);

  const handleClick = () => {
    // console.log("clicked!");
    setValue("X");
  };

  return (
    <button
      className="bg-white p-6 rounded shadow-md square font-bold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
