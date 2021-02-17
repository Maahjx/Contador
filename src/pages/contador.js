import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Contador(prop) {

    const history = useHistory();
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    let count_down = null;

    function countDown(count_down) {
        let now = new Date(Date.now()).getTime();
        let diff = count_down - now;
        setDays(Math.floor(diff / day))
        setHours(Math.floor(diff % day / hour))
        setMinutes(Math.floor(diff % hour / minute))
        setSeconds(Math.floor(diff % minute / second))
    }

    function onClick() {
        history.push('/')
    }

    useEffect(() => {
        let x = null

        if (prop.location.state.date == null) {
            count_down = new Date('10/10/2030 00:00:00').getTime();
            x = setInterval(() => countDown(count_down), 300)
        }else {
            clearInterval(x)
            count_down = new Date(`${prop.location.state.date} 00:00:00`).getTime();
            x = setInterval(() => countDown(count_down), 300)
        }
    }, []);


    return (
        <div className="content-contador">
            <header>
                <nav>
                    <ul className="list-nav">
                        <li onClick={onClick} className="logo-contador">Contador</li>
                        <li className="btn-reset-li"><button className="btn-reset" onClick={onClick} type="reset">Reiniciar</button></li>
                    </ul>
                </nav>
            </header>
            <div className="container-contador">
                <h1 className="tittle-contador">Faltam</h1>
                <ul className="list-content">
                    <li className="item-li">
                        <span className="contagem">{days}</span>
                        <p className="descricao">Dias</p>
                    </li>
                    <li className="item-li">
                        <span className="contagem">{hours}</span>
                        <p className="descricao">Horas</p>
                    </li>
                    <li className="item-li">
                        <span className="contagem">{minutes}</span>
                        <p className="descricao">Minutos</p>
                    </li>
                    <li className="item-li">
                        <span className="contagem">{seconds}</span>
                        <p className="descricao">Segundos</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}