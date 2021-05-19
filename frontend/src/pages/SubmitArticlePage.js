import React, { useState, useEffect } from 'react';
import { Alert, Button, Container, Dropdown, Form, Row } from 'react-bootstrap';
import axios from 'axios';

const formStyle = {
  minWidth: '200px',
};

const evidences = ['Strongly Support', 'Weekly Support', 'Weekly Disagree', 'Strongly Disagree'];

const SubmitArticlePage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [claim, setClaim] = useState('Select');
  const [practice, setPractice] = useState('TDD');
  const [evidence, setEvidence] = useState('Select');
  const [message, setMessage] = useState(null);
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataPractices } = await axios.get('/api/practices');
      setPractices(dataPractices);
    };

    fetchData();
  });

  const handlePractice = (item) => {
    setPractice(item);
    setClaim('Select');
  };

  const handleClaim = (item) => {
    setClaim(item);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submitted');

    if (claim === 'Select' || evidence === 'Select') {
      setMessage('Please select claim and/or evidence');
      return;
    }

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        '/api/articles',
        {
          title,
          author,
          year,
          claim,
          se_practice: practice,
          evidence_strength: evidence,
        },
        config,
      );
      console.log(data);
      setMessage(data.msg);
    } catch (error) {
      console.log(error.response);
      setMessage(
        error.response && error.response.data.message ? error.response.data.message : error.message,
      );
    }
  };

  return (
    <Container className="d-flex my-3 flex-column justify-content-center align-items-center">
      <h2>Submit Article</h2>
      <Form className="w-50 mt-3 d-flex flex-column" onSubmit={submitHandler}>
        <Form.Group as={Row} controlId="titleForm">
          <Form.Label>Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Form.Group as={Row} controlId="authorForm" className="mx-3">
            <Form.Label>Author</Form.Label>
            <Form.Control
              required
              style={formStyle}
              type="text"
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} controlId="yearForm" className="mx-3">
            <Form.Label>Year</Form.Label>
            <Form.Control
              required
              style={formStyle}
              type="number"
              placeholder="Year"
              value={year}
              min={2000}
              max={new Date().getFullYear()}
              onChange={(e) => setYear(e.target.value)}
            />
          </Form.Group>
        </div>
        <div className="d-flex justify-content-center">
          <Form.Group
            as={Row}
            controlId="practiceForm"
            className="mx-4 d-flex flex-column  align-items-center"
          >
            <Form.Label className="mr-3">Practice</Form.Label>
            <Dropdown onSelect={handlePractice}>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                style={{ minWidth: '120px' }}
              >
                {practice}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {practices.map((practice, index) => (
                  <Dropdown.Item eventKey={practice.name} key={index}>
                    {practice.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>

          <Form.Group
            as={Row}
            controlId="claimForm"
            className="mx-4 d-flex flex-column  align-items-center"
          >
            <Form.Label className="mr-3">Claim</Form.Label>
            <Dropdown onSelect={handleClaim}>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                style={{ minWidth: '120px' }}
              >
                {claim}
              </Dropdown.Toggle>
              {practices.length > 0 && (
                <Dropdown.Menu>
                  {practices
                    .find((item) => item.name === practice)
                    .claims.map((claim, index) => (
                      <Dropdown.Item eventKey={claim} key={index}>
                        {claim}
                      </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
              )}
            </Dropdown>
          </Form.Group>
        </div>

        <Form.Group
          as={Row}
          controlId="evidenceForm"
          className="d-flex flex-column  align-items-center"
        >
          <Form.Label className="mr-3">Evidence</Form.Label>
          <Dropdown onSelect={(item) => setEvidence(item)}>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" style={{ minWidth: '220px' }}>
              {evidence}
            </Dropdown.Toggle>
            {practices.length > 0 && (
              <Dropdown.Menu>
                {evidences.map((item, index) => (
                  <Dropdown.Item eventKey={item} key={index}>
                    {item}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            )}
          </Dropdown>
        </Form.Group>

        <Button type="submit" variant="success" className="my-2 mx-auto">
          Submit
        </Button>
      </Form>
      {message && <Alert variant="info">{message}</Alert>}
    </Container>
  );
};

export default SubmitArticlePage;
