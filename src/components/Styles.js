import styled from 'styled-components';


//export unnamed styled-component (exported to hooks in this case)
export const DivSC = styled.div`
    background-color: ${props => props.bgc || "purple"};
    width: 400px;
    height: 400px;
`;

export const H1S = styled.h1`
    background-color: lightgray;
    text-align: center;
    color: blue;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
`;


export const Paper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 5px; 
`;