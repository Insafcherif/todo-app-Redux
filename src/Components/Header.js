import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { filtreTask } from '../Redux/Action';
import { useSelector } from 'react-redux';

function Header() {
  const tasks = useSelector((state) => state)
  const dispatch = useDispatch();

  const handlefitre = (e) => {
    dispatch(filtreTask(tasks.done))

  }
  return (
    <Navbar bg="light" expand="lg" fixed="top" style={{ boxShadow: '1px 2px 9px gray' }}>
      <Container>
        <Navbar.Brand href="#home">To do Application</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse >
          <Navbar.Text style={{width : "200px", display: "flex", justifyContent: "space-around"}}>
            <h7>Check your tasks: </h7> 
            <Form.Check type="checkbox" label="Done" onClick={handlefitre} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header