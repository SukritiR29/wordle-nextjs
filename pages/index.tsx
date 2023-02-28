import { observer, useLocalObservable } from "mobx-react-lite";
import Querty from "../components/Qwerty";
import Guess from "../components/Guess";
import PuzzleStore from "../stores/PuzzleStore";

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)

  return <div>
    <h1>Wordle</h1>
    <Guess/>
    <h1>won/loss</h1>
    <Querty/>
  </div>
})