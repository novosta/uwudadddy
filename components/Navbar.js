import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>Lila</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        <Link href='/about' passHref>
          <StyledLink>About</StyledLink>
        </Link>
        <Link href='https://cdn.discordapp.com/attachments/956722558466682954/956793393487433758/Lila.zip' passHref>
          <StyledLink>Download</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
