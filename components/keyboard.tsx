//@ts-nocheck 
import { observer } from 'mobx-react-lite'
 
export default observer(function Querty({store}) {
  const qwerty = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'] //alphabatical keyboard order

  const handleButtonCLick = (char: string) => {
    console.log(`Button ${char} clicked`);
  }
  return (
    <div>
      {qwerty.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center">
          {row.split('').map((char, charIndex) => {
            const bgColor = store.exactGuesses.includes(char)
              ? 'bg-green-400'
              : store.inexactGuesses.includes(char)
              ? 'bg-yellow-400'
              : store.allGuesses.includes(char)
              ? 'bg-gray-400'
              : 'bg-yellow-300'
            return (
              <div
              key={charIndex}
                className={`rounded-m m-px flex h-10 w-10 items-center justify-center uppercase ${bgColor}`}
                onClick={() => handleButtonCLick}
              >
                {char}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
})