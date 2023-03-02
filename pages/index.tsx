import { observer, useLocalObservable } from "mobx-react-lite";
import Querty from "../components/Qwerty";
import Guess from "../components/Guess";
import PuzzleStore from "../stores/PuzzleStore";

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)

  return <div className="flex h-screen w-screen items-center justify-center flex-col bg-zinc-400 ">
    <h1 className="text-6xl font-bold uppercasr text-transparent bg-clip-text bg-gradient-to-br from-red-800 to-red-800">Wordle</h1>
    {new Array(6).fill(0).map((_,i) => (
      <Guess word={"test"} guess={"guess"} isGuessed={true}/>
    ))}
    
    <h1>won/loss</h1>
    <Querty/>
  </div>
})