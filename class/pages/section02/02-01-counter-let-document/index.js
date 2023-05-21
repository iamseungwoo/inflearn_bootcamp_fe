export default function CounterLetDocumnetPage() {
    


    function onClickCountUp() {
        const count = Number(document.getElementById("qqq").innerText) + 1     
        document.getElementById("qqq").innerText = count;
    }

    function onClickCountDown() {
        const count = Number(document.getElementById("qqq").innerText) - 1;
        document.getElementById("qqq").innerText = count;
    }

    return (
        <>
            <div id="qqq">0</div>
            <button onClick={onClickCountUp}>count up!</button>
            <button onClick={onClickCountDown}>count down!</button>
        </>
    )
}