import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from '../assets/img/header-img.svg';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] =useState(false);
    const [text, setText] =useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 1500;
    const toRotate = ["Frontend developer", "React developer" , "JavaScript developer"];
    useEffect(() => {
        const ticker = setInterval(()=>{
            tick();
        }, delta);
        return ()=> {clearInterval(ticker)}
    }, [text]);

    const tick = ()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }
        if (!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Andrii `}<span className="wrap">{text}</span></h1>
                        <p>My name is Andrii, I am 20 years old, I`m an enthusiastic and detail-oriented
                            Frontend Software Engineer seeking an entry-level position with Company to use
                            my skills in coding, troubleshooting complex problems, and assisting in the timely
                            completion of projects. I am searching for employment with a Company where I
                            can use my abbility to communicate with people and evolve. In addition I have
                            leadership and communication skills that allow me to perform much better in my
                            role.
                        </p>
                        <button><a className="link" href="https://t.me/haruka_7" target="_blank">Let's connect <ArrowRightCircle size={25}></ArrowRightCircle></a></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;