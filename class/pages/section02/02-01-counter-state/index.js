import { useState } from "react";

export default function CounterLetDocumnetPage() {
    const [count, setCount] = useState(0);

    function onClickCountUp() {
        setCount(count + 1);
    }

    function onClickCountDown() {
        setCount(count - 1);
    }

    return (
        <>
            <div id="qqq">{count}</div>
            <button onClick={onClickCountUp}>count up!</button>
            <button onClick={onClickCountDown}>count down!</button>
        </>
    );
}
