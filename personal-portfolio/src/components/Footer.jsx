import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/telegram-svgrepo-com.svg";
import navIcon2 from "../assets/img/Octicons-mark-github.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://t.me/haruka_7" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
                            <a href="https://github.com/AndriyVegera" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
                            <a href="https://www.instagram.com/a.haruka.s/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}