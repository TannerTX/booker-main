import React, { useState } from "react";

export default function Policy() {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        const payload = {
            data: message
        };

        fetch("https://hook.us1.make.com/nr67atygpmrsxkekxgv0x6jpncfx7iop", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Enter your message"
            />
            <button onClick={handleClick}>CLICK</button>
        </>
    );
}
