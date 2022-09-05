import React, {useState} from "react";
import translate from "translate";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import languages from './langs.js'

async function translateTo(lang, text) {
    translate.engine = "google";

    return await translate(text, { from: "en", to: lang });
}

function App() {
    const [targetLanguage, setTargetLanguage] = useState("hy");
    const [translation, setTranslation] = useState("");

    async function handleTranslation(targetLanguage, text) {
        try {
            let result = await translateTo(targetLanguage, text);
            setTranslation(result);
        } catch {
            setTranslation(text);
        }
    }

    function drawLanguageOptions() {
        return languages.map((language) => <option key={language.name} value={language.code}> {language.name} </option>);
    }

    function translateToTargetLanguage(e) {
        handleTranslation(targetLanguage, e.target.value);
    }

    function handleSwitchingLanguages(e) {
        setTargetLanguage(e.target.value);
        handleTranslation(e.target.value, document.querySelector(".from").value);
    }

    return (
        <Container>
            <Row>
                <Col xs={{ span: 6, offset: 6 }}>
                    <Form.Select aria-label="Default select example" className={"lang-list"} onChange={handleSwitchingLanguages}>
                        {drawLanguageOptions()}
                    </Form.Select>
                </Col>
            </Row>

            <Row>
                <Col xs={6}>
                    <textarea name="" className="from" onChange={translateToTargetLanguage}></textarea>
                </Col>

                <Col xs={6}>
                    <textarea name="" className="to" value={ translation } readOnly={true}></textarea>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
