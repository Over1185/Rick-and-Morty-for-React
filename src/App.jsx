import { CharacterList } from "./components/CharactersList";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty Characters</h1>
      <CharacterList />
    </div>
  );
}

export default App;
