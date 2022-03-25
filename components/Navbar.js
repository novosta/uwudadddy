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
        <Link href='https://drive.google.com/file/d/1sV8Yie6jRU5jbSKs2AM_fYUmtZFo5v_k/view?usp=drivesdk'  passHref>
          <StyledLink>Download</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
