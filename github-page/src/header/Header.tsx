import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export function Header() {
    const anchorStyle = {
        textDecoration: "none",
        color: "inherit",
    };
    return (
        <div className="sticky-top ">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Ravi Singh</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link style={anchorStyle} to="/leetcode"> <Image src="/resources/images/leetcode.png" height={28} alt="leetcode"/> Leetcode</Link></Nav.Link>
                        <Nav.Link><Link style={anchorStyle} to="/java"><Image src="/resources/images/java.png" height={28} alt="java"/>Java</Link></Nav.Link>
                        <Nav.Link><Link style={anchorStyle} to="/springboot"><Image src="/resources/images/spring-boot.png" height={28} alt="springboot"/> SpringBoot</Link></Nav.Link>
                        <Nav.Link><Link style={anchorStyle} to="react"> <Image src="/resources/images/react.webp" height={28} alt="react"/> React</Link></Nav.Link>
                        
                        {/*                         
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        */}

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}