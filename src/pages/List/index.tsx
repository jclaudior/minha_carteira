import React, { useMemo, useState, useEffect } from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import {
    Container,
    Content,
    Filters
} from './styles';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: string;
    description: string;
    amountFormatted: string;
    frequency: string;
    dateFormatted: string;
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {

    const [data, setData] = useState<IData[]>([]);

    const { type } = match.params;

    const { title, lineColor } = useMemo(() => {
        return type === 'entry-balance' ?
            {
                title: 'Entradas',
                lineColor: '#F7931B'
            } : {
                title: 'Saídas',
                lineColor: '#E44C4E'
            };
    }, [type]);

    const listData = useMemo(() => {
        return type === 'entry-balance' ? gains : expenses;
    }, [type]);

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

    useEffect(() => {
        const response = listData.map(item => (
            {
                id: String(Math.random() * listData.length),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E' ,
            }
        ));
        setData(response);
    }, [listData]);

    return (
        <Container>
            <ContentHeader title={title} lineColor={lineColor}>
                <SelectInput options={months} />
                <SelectInput options={yaers} />
            </ContentHeader>
            <Filters>
                <button className="tag-filter tag-filter-recorrent" type="button">Recorrentes</button>
                <button className="tag-filter tag-filter-eventual" type="button">Eventuais</button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard
                            key={item.id}
                            tagColor={item.tagColor}
                            title={item.description}
                            subTitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />
                    ))
                }
            </Content>
        </Container>
    );
}


export default List;