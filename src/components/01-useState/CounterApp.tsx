import './counter.css'
import {useState} from "react";

const CounterApp = () => {
    const [state, setState] = useState({
        counter1: 0,
        counter2: 1,
        counter3: 3
    })

    const {counter1} = state;
    return (
        <>
            <h1>Counter: {counter1}</h1>
            <hr/>
            <button
                className={"btn btn-primary"}
                onClick={() => {
                    setState({
                        ...state,
                        counter1: counter1 + 1
                    })
                }}>
                +1
            </button>
        </>
    )
        ;
};

export default CounterApp;