import React, { useState } from 'react';

import {
    Container,
    ToggleLabel,
    ToggleSelector
} from './styles'

const Toggle: React.FC = () =>{
    const [online, setOnline] = useState(false);
    return <Container>
        <ToggleLabel>Ligth</ToggleLabel>
        <ToggleSelector 
            checked={online}
            uncheckedIcon={false}
            checkedIcon={false}
            onChange = {
                ()=>{
                    console.log("mudou");
                    setOnline(!online);
                }
            }
        />
        <ToggleLabel>Dark</ToggleLabel>
    </Container>
}   

export default Toggle;