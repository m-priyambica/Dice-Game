import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
         <p>Select any  Number</p>
         <p>Click on dice  image  </p>
         <p>
            after click on dice  if selected  number is equal  to dice dice number you 
            will get  same point  as dice{""}
            </p>   
        </div>
      
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
max-width:800px;
margin: 0 auto;
   background-color :#ffff ;
   padding:20px;
   margin-top:40px;
   border: 1px solid black;
   margin-bottom: 22px;
   h2{
    font-size:24px;
   }
   .text{
    margin-top:24px;
   }

`;