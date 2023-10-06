import { useState } from "react";
import People from "./components/People";
import data from "/data.json";

function Button({ onClick, children }) {
  return (
    <button
      className="mt-4 p-2 font-semibold text-xl shadow-2xl bg-pink-500 w-full rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="w-[90%] mx-auto h-screen grid place-items-center">
      <section className="w-[min(100%,_600px)] rounded-sm bg-white shadow-2xl p-8">
        <People data={people} />
        <Button onClick={() => setPeople([])}>Clear All</Button>
      </section>
    </main>
  );
}
