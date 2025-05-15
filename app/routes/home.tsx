import { useState } from "react";
import { Button } from "~/lib/components/ui/button";

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
    <main className="min-h-screen flex flex-col gap-5 items-center justify-center">
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
    </main>
  );
}
