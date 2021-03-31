import styled from 'styled-components';


export const Container = styled.div`
    grid-area: AS;
    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color.secundary};
    border-right: 1px solid ${props => props.theme.color.gray};
    padding-left: 20px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    width: 40px;
    height:40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.color.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.color.info};
    text-decoration: none;
    transition: opacity .3s;
    margin: 7px 0px;
    display: flex;
    align-items: center;

    &:hover{
        opacity: 0.7;
    }

    > svg{
        font-size: 18px;
        margin-right: 5px;
    }
`;



