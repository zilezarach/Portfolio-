import React from "react";
import GithubCalendar from "react-github-calendar";
import {Row} from "react-bootstrap";

function Github() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "10px"}}>
            <h1 className="project-heading" style={{paddingBottom:"20px"}}>
                Days I <strong className="purple">Code</strong>
            </h1>
            <GithubCalendar username="zilezarach" blocksize= {14} blockMargin= {5} color= "#c084f5" fontSize={15} />
        </Row>
    );
}

export default Github;