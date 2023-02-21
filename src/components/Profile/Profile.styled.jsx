import styled from "styled-components";

export const ProfileContainer = styled.div`
border: 1px solid black;
background: white;
display: flex;
align-items: center;
flex-direction: column;
max-width: 300px;
`;

export const Image = styled.img`
width: 100px;
height: 100px;
padding: 16px;
margin: auto;
display: flex;
`;

export const UserName = styled.h2`
color: black;
padding-left: 20px;
padding-right: 20px;
text-align: center;
`;

export const UserInfo = styled.p`
color: grey;
text-align: center;
font-size: 14px;
font-weight: 500;
`;

export const StatsContainer = styled.ul`
    list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 70px;
  border-top: 1px solid rgb(146, 146, 146);
  background-color: #676767;
  margin: 0;
  padding: 0;

`;

export const StatsItem = styled.li`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
border-right: 1px solid #ccc;

`;

export const StatsLabel = styled.span`
color: #fff;
margin-bottom: 5px;
`;


export const StatsQuantity = styled.span`
color: rgb(235, 116, 116);
`;
