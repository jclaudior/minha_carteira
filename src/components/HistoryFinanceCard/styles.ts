import styled from 'styled-components';

interface ITagProps {
    color: string;
}

export const Container = styled.li`
   background-color: ${props => props.theme.color.tertiary};
   list-style: none;
   border-radius: 5px;
   margin: 10px 0px;
   padding: 12px 10px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   transition: all .3s;
   position: relative;
   
   &:hover{
        opacity: 0.7;
        transform: translate(10px);
   }

   >div{
       display:flex;
       flex-direction: column;
       justify-content: space-between;
       padding-left: 10px;
   }
`;

export const Tag = styled.div<ITagProps>`
    background-color: ${props => props.color};
    width:10px;
    height: 60%;
    position: absolute;
    left: 0px;
`;