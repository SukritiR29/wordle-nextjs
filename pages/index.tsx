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
    <h1 className="text-6xl font-bold uppercasr text-transparent bg-clip-text bg-gradient-to-br from-red-800 to-red-800 mb-5">
      Wordle
      </h1>
     {new Array(6).fill(0).map((_,i) => (
      <Guess 
      key={i}
      word={store.word}
      guess={store.guesses[i]} 
      isGuessed={i < store.currentGuesses}
      />
    ))}
    
    <h1>won/loss</h1>
    <Querty/>
    word: {store.word}
    guesses: {JSON.stringify(store.guesses)}
  </div>
  )
})