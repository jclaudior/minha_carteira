import React, {useMemo} from 'react';

import emojis from '../../utils/emojis';
import Toggle from '../Toggle';

import {
    Container,
    Profile,
    Wellcome,
    UserName
} from './styles';

const MainHeader: React.FC = () =>{
    const emogi = useMemo(()=>{
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    },[]);
    return (
        <Container>
            <Toggle/>
            <Profile>
                <Wellcome>Olá, {emogi}</Wellcome>
                <UserName>João Claudio Ribeiro</UserName>
            </Profile>
        </Container>
    );
}


export default MainHeader;