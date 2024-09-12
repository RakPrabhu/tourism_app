import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Experience.css'; // Optional: for additional styling

// Sample data for experiences
const experiences = [
    {
        title: "A Memorable Trip to the Taj Mahal",
        location: "Agra, India",
        description: "Visited the Taj Mahal and was awe-struck by its magnificent architecture and the rich history behind it. The marble carvings and the lush gardens around the monument were truly enchanting.",
        image: "https://example.com/taj-mahal.jpg" // Replace with a real image URL
    },
    {
        title: "Exploring the Streets of Jaipur",
        location: "Jaipur, India",
        description: "Strolled through the vibrant streets of Jaipur, discovering local markets, historic forts, and palaces. The bustling bazaars and traditional Rajasthani cuisine made the trip unforgettable.",
        image: "https://example.com/jaipur.jpg" // Replace with a real image URL
    },
    {
        title: "Relaxing in Goa",
        location: "Goa, India",
        description: "Enjoyed a relaxing beach vacation in Goa. The pristine beaches, the warm sun, and the lively beach parties created a perfect getaway. Tried various water sports and indulged in delicious seafood.",
        image: "https://example.com/goa.jpg" // Replace with a real image URL
    }
];

const Experience = () => {
    return (
        <Container>
            <h2 className="text-center my-4">Travel Experiences</h2>
            <Row>
                {experiences.map((exp, index) => (
                    <Col md={4} key={index} className="mb-4">
                        <Card className="experience-card">
                            <Card.Img variant="top" src={exp.image} alt={exp.title} />
                            <Card.Body>
                                <Card.Title>{exp.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{exp.location}</Card.Subtitle>
                                <Card.Text>{exp.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Experience;
