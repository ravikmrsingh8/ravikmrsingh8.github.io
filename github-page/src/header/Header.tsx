import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export function Header() {
    return (
        <div className="fixed-top">
            <Navbar bg="transparent" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Ravi Singh</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="leetcode"> <Image src="resources/images/leetcode.png" height={20}/>Leetcode</Nav.Link>
                        <Nav.Link href="java"> <Image src="resources/images/java.png" height={20}/>Java</Nav.Link>
                        <Nav.Link href="springboot"> <Image src="resources/images/spring-boot.png" height={20}/> Spring Boot</Nav.Link>
                        <Nav.Link href="react"> <Image src="resources/images/react.webp" height={20}/> React</Nav.Link>
                        {
                        //<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        //    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        //    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        //    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        //    <NavDropdown.Divider />
                        //    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        //</NavDropdown>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}