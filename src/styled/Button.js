import styled from "styled-components";


 export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  font-size: 16px;
  border: 1px solid transparent;
   transition: 0.4s background ease-in;
   cursor:pointer;
   margin-left:150px;

  &:hover{
    background-color: white;
    border: 1px solid black;
    color: #000000;
    transition: 0.3s background ease-in;
  }
  `;
  export const OutlineButton = styled(Button)`
  `;