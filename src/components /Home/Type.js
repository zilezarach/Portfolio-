import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [ 
                    "Web Developer",
                    "Software Developer",
                    "Smart Contract auditor",
                    "Malware analyst",
                ], 
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;