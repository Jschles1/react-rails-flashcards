import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import BasicButton from './BasicButton';

const Navbar = () => 
  <Menu>
    <Menu.Item header>Flashcards</Menu.Item>
    <Menu.Item bordered>
      <BasicButton 
        isFluid={false}
        color="black"
        link={Link}
        url={`/`}
        textContent="My Decks"
      />
    </Menu.Item>
    <Menu.Item>
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


export default Navbar;