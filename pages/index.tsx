import { observer, useLocalObservable } from "mobx-react-lite";
import Querty from "../components/Qwerty";
import Guess from "../components/Guess";
import PuzzleStore from "../stores/PuzzleStore";
import { useEffect } from "react";

export default observer(function Home() {
  const store = useLocalObservable(() => PuzzleStore)
  useEffect(() => {
    store.init()
    window.addEventListener('keyup', store.handleKeyup)

    return () => {
      window.removeEventListener('keyup', store.handleKeyup)
    }
  }, [])

  return ( 
  <div className="flex h-screen w-screen items-center justify-center flex-col bg-zinc-400 ">
    <h1 className="text-6xl font-bold uppercasr text-transparent bg-clip-text bg-gradient-to-br from-blue-800 to-blue-800 mb-5">
      Wordle
      </h1>
     {store.guesses.map((_,i) => (
      <Guess 
      key={i}
      word={store.word}
      guess={store.guesses[i]} 
      isGuessed={i < store.currentGuess}
      />
    ))}
    {store.won && <h1>You won!</h1>}
    {store.lost && <h1>You lost!</h1>}
    {(store.won || store.lost) && (
       <button onClick={store.init}>Play Again</button>
    )}
    <Querty store={store} />
    
  </div>
  )
})