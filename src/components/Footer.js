import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram,} from 'react-icons/ai';
import {FaLinkedinIn} from 'react-icons/fa';

function Footer() {
    let date = new Date()
    let year = date.getFullYear();
    return(
        <Container fluid className= "footer">
            <Row>
                <Col md = "4" className= "footer-copyright">
                    <h3>Developed by Stephen Karani</h3>
                </Col>
                <Col md = '4' className= 'footer-copyright'>
                    <h3>Copyright {year} </h3>
                </Col>
                <Col md = "4" className="footer-body">
                    <ul className= 'footer-icons'>
                        <li className= 'social-icons'>
                            <a 
                                href= "https://github.com/zilezarach"
                                style= {{color: 'white'}}
                                target= "_blank"
                                rel= "noopener norefferer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className= 'social-icons'>
                            <a 
                                href= "https://twitter.com/stevezarachii"
                                style= {{color: 'white'}}
                                target= "_blank"
                                rel= "noopener norefferer"
                            >
                                <AiOutlineTwitter />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;