import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <Menu>
      <Menu.Item header>Flashcards</Menu.Item>
      <Menu.Item bordered>
        <Button basic color="black" as={Link} to={`/`}>My Decks</Button>
      </Menu.Item>
      <Menu.Item>
       <Button basic color="green" as={Link} to={`/quiz`}>Quiz Yourself</Button>
      </Menu.Item>
      <Menu.Item position="right">
        &copy; John Schlesinger
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;