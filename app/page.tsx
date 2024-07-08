import Click from "./click";

export default function Home() {
  function handleClick() {
    console.log('click');
    return 0;
  }
  return (
    <main className="field">
      { Array.from({ length: 100 }, (_, i) => <Click key={i}/>) }
    </main>
  );
}
