import React, {useState} from "react";
import translate from "translate";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

async function translateTo(lang, text) {
    translate.engine = "google";

    return await translate(text, { from: "en", to: lang });
}

function App() {
    const [targetLanguage, setTargetLanguage] = useState("en");
    const [translation, setTranslation] = useState("");

    async function handleTranslation(targetLanguage, text) {
        try {
            let result = await translateTo(targetLanguage, text);
            setTranslation(result);
        } catch {
            setTranslation(text);
        }
    }

    return (
        <Container>
            <Row>
                <Col xs={{ span: 6, offset: 6 }}>
                    <Form.Select aria-label="Default select example" className={"lang-list"} onChange={(e) => {
                        setTargetLanguage(e.target.value);
                        handleTranslation(e.target.value, document.querySelector(".from").value);
                    }}>
                        <option value="en">English</option>
                        <option value="hy">Armenian</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="pt">Portuguese</option>
                        <option value="ru">Russian</option>
                        <option value="es">Spanish</option>
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                    <textarea name="" className="from" onChange={(e) => {
                        handleTranslation(targetLanguage, e.target.value);
                    }}></textarea>
                </Col>

                <Col xs={6}>
                    <textarea name="" className="to" value={ translation } readOnly={true}></textarea>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
