import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import { 
    Container, 
    Content, 
    Filters
} from './styles';
const List: React.FC = () =>{
    const months = [
        {
            value: 7,
            label: "Julho"
        },
        {
            value: 8,
            label: "Agosto"
        },
        {
            value: 9,
            label: "Setembro"
        }
    ];

    const yaers = [
        {
            value: 2021,
            label: 2021
        },
        {
            value: 2020,
            label: 2020
        },
        {
            value: 2019,
            label: 2019
        }
    ];

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#E44C4E">
                    <SelectInput options={months}/>
                    <SelectInput options={yaers}/>
            </ContentHeader>
            <Filters>
                <button className="tag-filter tag-filter-recorrent" type="button">Recorrentes</button>
                <button className="tag-filter tag-filter-eventual" type="button">Eventuais</button>
            </Filters>
            <Content>
                <HistoryFinanceCard
                    tagColor="#E44C4E"
                    title="Conta de Luz"
                    subTitle="27/07/2020"
                    amount="R$ 130,00"
                />               
            </Content>
        </Container>
    );
}


export default List;