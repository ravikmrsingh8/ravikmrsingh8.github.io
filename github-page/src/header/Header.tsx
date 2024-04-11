import { SyntheticEvent, useState } from "react";
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
        margin:"auto",
        paddingRight: "20px"
    };

    const handleClick = (event: SyntheticEvent) => {
        console.log(event.target)
    };

    return (
        <div className="sticky-top ">
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Ravi Singh</Navbar.Brand>
                    <Nav className="me-auto">
                        <div className="vr"></div>
                        <Link style={anchorStyle} to="/leetcode"> <Image src="/resources/images/leetcode.png" height={28} alt="leetcode"/> Leetcode</Link>
                        <Link style={anchorStyle} to="/datastructure"> <Image src="/resources/images/ds.webp" height={28} alt="datastructure"/> Data Structures</Link>
                        <div className="vr"></div>
                        <Link style={anchorStyle} to="/java"><Image src="/resources/images/java.png" height={28} alt="java"/> Java </Link>
                        <Link style={anchorStyle} to="/spring"><Image src="/resources/images/spring.png" height={28} alt="spring"/> Spring </Link>
                        <Link style={anchorStyle} to="hibernate"> <Image src="/resources/images/hibernate.png" height={28} alt="hibernate"/> Hibernate </Link>
                        <Link style={anchorStyle} to="kafka"> <Image src="/resources/images/kafka.png" height={28} alt="kafka"/> Apache Kafka </Link>
                        <div className="vr"></div>
                        <Link style={anchorStyle} to="typescript"> <Image src="/resources/images/typescript.png" height={28} alt="typescript"/> Typescript </Link>
                        <Link style={anchorStyle} to="react"> <Image src="/resources/images/react.webp" height={28} alt="react"/> React </Link>
                        <Link style={anchorStyle} to="redux"> <Image src="/resources/images/redux.png" height={28} alt="redux"/> Redux </Link>
                        <div className="vr"></div>
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