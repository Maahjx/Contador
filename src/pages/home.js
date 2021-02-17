import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function Home() {
    const [date, setDate] = useState(null)
    const history = useHistory();

    const handleChange = (e) => {
        console.log(e.target.value)
        setDate(e.target.value)
    }

    function onClick() {
        history.push('/contador', { date: date })
    }

    return (
        <div className="content-index">
            <div className="container-index">
                <h1 className="titulo-index">Contador</h1>
                <p className="sub-tittle-index">Informe uma data</p>

                <input className="input-index" onChange={handleChange} type="date" min="2021-02-16"></input>

                <button className="btn-index" onClick={onClick} type="button">Iniciar contagem</button>
            </div>
        </div>
    )
}
