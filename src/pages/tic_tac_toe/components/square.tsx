export interface SquareProps {
  value: number;
  onSquareClick: () => void;
}

export default function Square(props: SquareProps) {
  const { value, onSquareClick } = props;

  return (
    <button
      className="bg-white p-6 rounded shadow-md square font-bold button"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
