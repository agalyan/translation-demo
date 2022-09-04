import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function App() {
    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

    const from = document.getElementById("from");
    let to = "";

    return (
        <Container>
            <Row>
                <Col xs={5}>
                    <Form.Select aria-label="Default select example">
                        <option value="en">English</option>
                    </Form.Select>
                </Col>

                <Col xs={{ span: 5, offset: 2 }}>
                    <Form.Select aria-label="Default select example" onChange={(e) => handleChangeLng(e.target.value)}>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col xs={5}>
                    <input type="text" id={"from"}/>
                </Col>

                <Col xs={2}>
                    <button onClick={(e) => {
                        to = t(from.value);
                        document.getElementById("to").value = to;
                    }}>Translate
                    </button>
                </Col>

                <Col xs={5}>
                    <input type="text" id={"to"}/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
