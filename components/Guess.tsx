export default function Guess({ isGuessed, guess, word }) {
    return (
      <div className="mb-2 grid grid-cols-5 gap-2">
        {new Array(5).fill(0).map((_, i) => {
          const bgColor = !isGuessed
            ? 'bg-cyan-50 text-slate-700'
            : guess[i] === word[i]
            ? 'bg-green-400 text-slate-50'
            : word.includes(guess[i])
            ? 'bg-yellow-400 text-slate-50'
            : 'bg-red-400 text-slate-50'
  
          return (
            <div
              className={`flex h-12 w-12 items-center justify-center border border-2 border-cyan-700 border-gray-400 font-bold uppercase text-black ${bgColor}`}
            >
              {guess[i]}
            </div>
          )
        })}
      </div>
    )
  }