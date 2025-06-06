
import styled from "styled-components";


const RollDice = ({
  rollDice,currentDice}) => {
  

  return (
    <DiceContainer>
        <div className="dice"  onClick={rollDice}>
     < img src={`/images/dice/dice_${currentDice}.png`} alt="dice 1"/>
       </div>
       <p>Click the Dice to Roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
margin-top: 48px;
align-items: center;
p{
    font-size: 24px;
}
.dice{
  cursor:pointer;
}
`;