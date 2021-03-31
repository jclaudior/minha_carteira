import React from 'react';
import logoimg from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
} from 'react-icons/md'

import {
    Container,
    Header,
    LogoImg,
    MenuContainer,
    MenuItemLink,
    Title
} from './styles';

const Aside: React.FC = () =>{
    return (
        <Container>
            <Header>
                <LogoImg src={logoimg} alt={"Logo Minha Carteira"} />
                <Title>Minha Carteira</Title>
            </Header>
            <MenuContainer>
                <MenuItemLink href="#">
                    <MdDashboard/>
                    Dashboard
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowUpward/>
                    Entradas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdArrowDownward/>
                    Saidas
                </MenuItemLink>
                <MenuItemLink href="#">
                    <MdExitToApp/>
                    Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    );
}


export default Aside;