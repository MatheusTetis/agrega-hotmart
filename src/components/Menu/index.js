import React from 'react';
import Link from 'next/link'
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link href="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </Link>

      <Button component={Link} className="ButtonLink" href="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;