import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";

import { AiFillGithub, AiOutline, AiOutlineTwitter,} from "react-icons/ai";

function Home2() {
    return (
        <Container fluid className="home-about-section" id ="about">
            <Container>
                <Row>
                    <Col md ={8} className="home-about-description">
                        <h1 style={{fontSize: "2.7em"}}>SOMETHING<span className="purple"> INTERESTING </span> ABOUT ME
                        </h1>
                        <p className="home-about-body">
                            lam a fanatic in programming and computer security and l have tried to gain knowledge and increase it...
                            < br />
                            < br /> Iam passionate coder in 
                            <i>
                                <b className="purple"> Python, Javascript, Ruby, C, Solidity and PHP</b>
                            </i>
                            < br /> Also have deep knowledge in malware analysis and in smart contract audit
                            < br />
                            I also have projects done with <b className="purple">Node.js</b> and <i>
                                <b className="purple">{""} Modern Javascript frameworks </b> 
                            </i> 
                            &nbsp; like 
                            <i>
                                < b className="purple"> React.js and Next.js </b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md = {12} className="home-about-social">
                        <h1>MY SOCIALS</h1>
                        <p>
                            Feel free to <span className="purple"> Connect </span> with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className= "social-icons">
                                <a href= "https://github.com/zilezarach"
                                    target ="_blank"
                                    rel="norefferer"
                                    className="icon-colour home-social-icons">
                                        <AiFillGithub />
                                    </a>
                            </li>
                            <li className="social-icons">
                                < a 
                                    href="https://www.twitter.com/stevezarachii"
                                    target="_blank"
                                    rel="norefferer"
                                    className="icon-color home-social-icons">
                                        <AiOutlineTwitter />
                                    </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;