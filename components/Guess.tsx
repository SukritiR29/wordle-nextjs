export default function Guess({isGuessed, guess, word}) {
    return (
    <div className="grid grid-cols-5 gap-5 mb-2">
        {
            new Array(5).fill(0).map((_, i) => {
                const bgColor = !isGuessed 
                  ? 'bg-black' 
                  : guess[i] === word[i] 
                  ? 'bg-green-400'
                  : word.includes(guess[i]) 
                  ? 'bg-yellow-400' 
                  : 'bg-black'
                return(
                  <div className="h-16 w-16 border border-gray-400 bg-zinc-600 text-white font-bold uppercase flex items-center justify-center">
                      {guess[i]}
                      </div>
                      )
        })}
    </div>
    )
}