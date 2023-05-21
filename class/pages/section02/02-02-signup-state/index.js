import { useState } from 'react';

export default function SignupStatePage() {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("yet nothing error");
    
    function onChangeEmail(event) {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);

        setEmail(event.target.value);
    }

    function onChangePassword(event) {
        setPassword(event.target.value);
    }   

    function onClickSignup() {

        console.log(email);
        console.log(password);

        // 1. validate inputs
        if (email.includes("@") === false) {
            // alert("wrong email!");
            // document.getElementById("myerror").innerText = "wrong email!!"; => old fashion
            setEmailError("wrong email!!");
        } else {
            // 2. backend send (api) => 나중에
    
            // 3. success notification
            alert("회원가입을 축하합니다!");
        }
    }

    return (
        <div>
            email: <input type="text" onChange={onChangeEmail}/>
            {/* <div id="myerror"></div> */}
            <div>{emailError}</div>
            password: <input type="password" onChange={onChangePassword}/>
            <button onClick={onClickSignup}>Signup</button>
        </div>
    )
}