import { useState } from "react";

export interface SquareMacthinProps {
  value: string;
}

export default function SquareMatchingCard(props: SquareMacthinProps) {
  const { value } = props;
  //   const [value, setValue] = useState();

  return (
    <button className="bg-white p-6 rounded shadow-md square font-bold button">
      {value}
    </button>
  );
}
