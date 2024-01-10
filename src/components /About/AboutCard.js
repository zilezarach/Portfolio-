import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function Aboutcard() {
    return(
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        My name <span className="purple">Stephen Karani</span> from
                        <span className="purple"> Nairobi, Kenya</span>
                        <br />
                        Iam self-taught software developer and freelancer.
                        <br />
                        Love playing and tinkering with computers at my own free time.
                    </p>
                    <p style={{color: "rgb(155 126 172)"}}>"Make a difference in the tech world!"{""}
                    </p>
                    <footer className="blockquote-footer">Zile</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default Aboutcard;