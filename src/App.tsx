import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex h-full w-full flex-col items-center">
      <h1 className="text-xs text-green-50">Hello, World</h1>
      <Button onClick={() => setCount(count + 1)}>
        You have clicked me {count} times!
      </Button>
    </main>
  );
}

export default App;
