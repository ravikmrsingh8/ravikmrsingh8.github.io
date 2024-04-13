import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectCard from './ProjectCard';
import Nav  from 'react-bootstrap/Nav';

function ProjectGrid() {

    return (
        <Container>
            <Row className='mb-4'>
                <Col>
                    <Nav.Link href="/">
                        <ProjectCard 
                            title="Java"
                            imageUrl="/resources/images/java.png"
                        />
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/">
                        <ProjectCard 
                            title="Data Structures"
                            imageUrl="/resources/images/ds.webp"
                        />
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/">
                        <ProjectCard 
                            title="Leetcode"
                            imageUrl="/resources/images/leetcode.png"
                        />
                    </Nav.Link>    
                </Col>
                <Col>
                    <Nav.Link href="/">
                        <ProjectCard 
                            title="Spring"
                            imageUrl="/resources/images/spring.png"
                        />
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/">
                        <ProjectCard 
                            title="Hibernate"
                            imageUrl="/resources/images/hibernate.png"
                        />
                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/"> 
                        <ProjectCard 
                            title="Kafka"
                            imageUrl="/resources/images/kafka.png"
                        />
                    </Nav.Link>    
                </Col>
        </Row>
        <Row>
            <Col>
                <Nav.Link href="/">
                    <ProjectCard 
                        title="Typescript"
                        imageUrl="/resources/images/typescript.png"
                    />
                </Nav.Link>    
            </Col>
            <Col>
                <Nav.Link href="/">
                    <ProjectCard 
                        title="React"
                        imageUrl="/resources/images/react.webp"
                    />
                </Nav.Link>
            </Col>
            <Col>
                <Nav.Link href="/">
                    <ProjectCard 
                        title="Redux"
                        imageUrl="/resources/images/redux-icon.webp"
                    />
                </Nav.Link>
            </Col>
            <Col></Col>
            <Col></Col>
            <Col></Col>
       
        </Row>
    </Container>
  );
}

export default ProjectGrid;