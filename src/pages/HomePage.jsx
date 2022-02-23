import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { List } from '../Components/List'
import { Card } from '../Components/Card';
import { Controls } from '../Components/Controls';
import { ALL_COUNTRIES } from '../config';

export const HomePage = () => {
    const [countries, setCountries] = useState([]);

    const {push} = useHistory();

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, [])

    return (
        <>
            <Controls />
            <List>
                {countries.map(c => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name,
                        info: [
                            {
                                title: 'Population',
                                discription: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                discription: c.region,
                            },
                            {
                                title: 'Capital',
                                discription: c.capital,
                            },
                        ]
                    }
                    return <Card key={c.name} onClick={() => push(`/country/$(c.name)`)} {...countryInfo} />
                })}
            </List>
        </>
    )
}
