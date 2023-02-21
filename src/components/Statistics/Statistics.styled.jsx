import styled from "styled-components";

export const StatisticsContainer = styled.section`
margin-top: 30px;
border: 1px solid black;
border-radius: 16px;
background: white;
// width: 200px;
`;

export const StatsList = styled.ul`
list-style: none;
display: flex;
padding: 0;

`;



export const StatsTitle = styled.h2`
color: black;
text-align: center;
`;



export const StatsItem = styled.li`
align-items: center;
display: flex;
flex-basis: 20%;
flex-direction: column;
padding: 10px;
border-top: 1px solid black;
`;

export const StatsLabel = styled.span`
align-items: center;
display: flex;
flex-direction: column;
width: 50px;
margin-bottom: 10px;
`;

export const StatsPercentage = styled.span`
margin-top: 10px;
font-weight: 600;
`;

