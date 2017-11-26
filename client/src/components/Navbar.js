import React from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BasicButton from './BasicButton';

const Navbar = () => {
  return(
    <Menu>
      <Menu.Item header>Flashcards</Menu.Item>
      <Menu.Item bordered>
        {/* <Button basic color="black" as={Link} to={`/`}>My Decks</Button> */}
        <BasicButton 
          isFluid={false}
          color="black"
          link={Link}
          url={`/`}
          textContent="My Decks"
        />
      </Menu.Item>
      <Menu.Item>
       {/* <Button basic color="green" as={Link} to={`/quiz`}>Quiz Yourself</Button> */}
       <BasicButton 
          isFluid={false}
          color="green"
          link={Link}
          url={`/quiz`}
          textContent="Quiz Yourself"
        />
      </Menu.Item>
      <Menu.Item position="right">
        &copy; John Schlesinger
      </Menu.Item>
    </Menu>
  );
}

export default Navbar;