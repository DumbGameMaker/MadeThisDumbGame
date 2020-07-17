import React, {useState, useCallback} from 'react';


function DumbThings() {

    const [dumbActions, setDumbActions] = useState(0);
    const [dumbPoints, setDumbPoints] = useState(0);
    const [message, setMessage] = useState("");
    const [messageVisibility, setMessageVisibility] = useState(true);

const virusDownload = useCallback(() => {
    let emailPrompt = window.prompt("Please enter your username/email", "username");
    let pwdPrompt = window.prompt("Please enter your password", "password");
    if(emailPrompt !== null && emailPrompt !== "" && pwdPrompt !== null && pwdPrompt !== "") {
        if(window.confirm("would you like to install MalAntiVirus?")){
        window.alert("Now installing MalAntiVirus");
        setMessage("You just installed malware! Great Job!<br /> I hope you didn't put your real email/pwd (look below) <br /> +5 dumbPoints");
        setMessageVisibility(false); 
        setDumbPoints(dumbPoints + 5);
        setDumbActions(dumbActions + 1);
        }else{
        setMessage("You didn't install the malwa- I mean antivirus? SHAME");
        setMessageVisibility(false); 
        }
}
}, [dumbActions, dumbPoints]);

return (
    <div id="DumbThings">
        <div id="banner">
            <p id="bannerText" hidden={messageVisibility}>
            {message}
            </p>
            <button hidden={messageVisibility}>
                Close
            </button>
        </div>
        <div className="actions">
            <p>VIRUS ALERT! CLICK BELOW TO ANTIVIRUS YOUR PC</p><br />
            <button onclick={virusDownload} id="virusButton">CLICK ME</button><br /><br />
            <p>Want cookies? Click below to download them!</p><br />
            <button >FREE COOKIES</button><br /><br />
            <p>Computer slow? Click below to download PC Optimizer Pro!</p><br />
            <button >CLICK M</button>
        </div>
        <div className="stats"> 

        </div>
    </div>
);
}
export default DumbThings;