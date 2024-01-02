//@ts-nocheck
import { observer, useLocalObservable } from "mobx-react-lite";
import Querty from "../components/keyboard";
import Guess from "../components/Guess";
import PuzzleStore from "../stores/PuzzleStore";
import { useEffect } from "react";
// @ts-nocheck  

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
  <div className="flex h-screen w-screen items-center justify-center flex-col bg-amber-50 ">
    <nav className="bg-yellow-100 w-screen mt flex justify-center items-center mb-5 border-b bordered-black ">
    <h1 className="text-4xl font-bold mt-2 mb-2">
      WORDLE
      </h1>
    </nav>
   
     {store.guesses.map((_,i) => (
      <Guess 
      key={i}
      word={store.word}
      guess={store.guesses[i]} 
      isGuessed={i < store.currentGuess}
      />
    ))}
    {store.won && <h1 className="bg-green p-2 rounded">You won!</h1>}
    {store.lost && <h1>You lost!</h1> && <h2>COrrect word was:</h2>}
    {(store.won || store.lost) && (
       <button onClick={store.init}>Play Again</button>
    )}
    <div>
    <Querty store ={store} />
    </div>
   
    
  </div>
  )
})