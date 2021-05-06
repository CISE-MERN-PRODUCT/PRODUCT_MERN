import React from 'react';
import { Row, Col, Container, Alert, ListGroup } from 'react-bootstrap';

const Article = () => {
  return (
    <>
      <Row className="my-5">
        <Col md={8}>
          <h1>ARTICLE HEADER</h1>
          <p>Date: December 31, 2020 by Author</p>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur suscipit, eos eius
            facilis animi, aut consectetur quod reprehenderit, quibusdam veniam sit et voluptate
            fuga accusantium eaque ratione dolore perspiciatis voluptatem!
          </p>
          <h2>heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur omnis commodi
            dolor necessitatibus perspiciatis nemo velit recusandae fuga sapiente! Mollitia,
            ratione, dolorem rerum placeat id eaque, error corrupti sapiente totam facere dolore
            quidem atque fuga quis reprehenderit explicabo cumque laborum dolor? Eos harum minima,
            explicabo beatae ullam dolor deleniti exercitationem suscipit cumque est iste quam
            molestias tempora. Eos numquam cumque laboriosam quas ipsam labore beatae dolore, sint
            tempore accusamus culpa unde error, magnam necessitatibus assumenda quisquam, sed nobis
            delectus adipisci id pariatur ipsum corrupti quo natus! Dicta sit soluta quam fuga quod!
            Tempore quibusdam possimus autem, minima doloremque odio asperiores.
          </p>
          <h2>heading 2</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam illum
            perferendis beatae incidunt eum aliquam blanditiis officiis cumque aliquid in, tempore,
            fugit explicabo obcaecati! Eum repellendus nemo voluptatum praesentium.
          </p>
        </Col>
        <Col md={4}>
          <Alert variant="secondary">
            <Alert.Heading>About</Alert.Heading>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur atque
              dolor fuga? Quam illum cumque quasi nulla vero debitis autem ad obcaecati ex, odio
              nihil rem facilis, sunt blanditiis.
            </p>
          </Alert>
          <Container>
            <h3>References</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Reference 1</ListGroup.Item>
              <ListGroup.Item>Reference 2</ListGroup.Item>
              <ListGroup.Item>Reference 3</ListGroup.Item>
              <ListGroup.Item>Reference 4</ListGroup.Item>
            </ListGroup>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Article;
