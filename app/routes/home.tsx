import { useState } from "react";
import { Button } from "~/lib/components/atoms";

export function meta() {
  return [
    { title: "Museio" },
    { name: "description", content: "Welcome to Museio!" },
  ];
}

export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevState) => ++prevState);
  };

  const handleDecrease = () => {
    setCount((prevState) => --prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-5">
      <h1 className="text-6xl font-bold uppercase">Museio App</h1>
      <p className="text-2xl">{count}</p>
      <Button className="font-bold" onClick={handleIncrease}>
        Increase
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="font-bold"
        onClick={handleDecrease}
      >
        Decrease
      </Button>
    </div>
  );
}
