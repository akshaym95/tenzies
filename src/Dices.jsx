import Dice from "./Dice";

export default function Dices({dices, toggleDice}) {
    return (
      <>
        <div className="dice-container">
          <div className="dice-row">
          {dices.map((dice) => {
            return <Dice num={dice.num} on={dice.on} key={dice.id} id={dice.id} toggleDice={toggleDice} />
          })}
          </div>
        </div>
      </>
    )
}