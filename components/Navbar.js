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
        <Link href='https://doc-04-9k-docs.googleusercontent.com/docs/securesc/mfi35q308hra7od2i054vrg9at4iask5/tfgfn0tjus340qii9mqmbvso7ompcqbh/1648276800000/13291453689536989174/13291453689536989174/1sV8Yie6jRU5jbSKs2AM_fYUmtZFo5v_k?e=download&ax=ACxEAsYVf7VKIxA8FBj4DSST4qahRTGBSDsWzUfKOBurVBQvv_x0xjU14ZozUD_DSqkB0iLT1sByyI35V1iHwXsSbBpS1nfBhPRG595NMN1nKuA8TzVRNu8g9710H2_jXqCyULDWx_abHJq41qmFHKfvLQ-BCUS8wnspa30ULoKUL6r9XUcM7X7w6GiHWtBmfFRsCtI2KBA4pxi1KxUxnyMnMOcuRQlvkEsVoltnEyP7haQVyyMG2GELkfBtEnCluPfJeDtZQgKn93UeoxkOHBqHkwy0BT4D5kvvadWWuVv1APssfsYgoyK7tsTxniRvkj0t6zAfTFOEMtlhJCqyEJcayPcSWH_OM_npk6KbZXoIxXhhmh9AIUrjHica1zAPgOFsR-cOCN_9lLJkZPtjx_dRnNmu8FZPRkvO1SxJ4-OA6JqYpifxzCIcLJ3pvWE9STBJBgKkF3RjbbDlIt_po-Rxs_gRFoI67Ek8xQalDZQOT8fycNs_VP09VYAfNCby031FxLwvuZs8gURSl_GCyk56AdXGkMxIj2YbB-db0vRpIgTNetURmFxTRlmkqo1zEHnY0vvFH9kVvExhCVNPta7-4UWMMGso9GAbTL-BRdWliIXU2-shNPkVhTDN7DK6d0m4QC4o2MrkeZW4Dv1CYWoN3NXqRevIt0vbF53VW1iuTWRJFzC6fraxErZnTHoZKrNKGIqgJjH3lfWNI2bNT7PowTvLiG0Wimak0DZkJ24HREtaeyIjUxN4o9vtED0CVpzXOooErUXGuE5YeFK9NfSfn3ajNRjiQdqNZ59wzYcZGS2AwmeBfBmV-HMTTlXE&authuser=0&nonce=ulgsstb4dnqnm&user=13291453689536989174&hash=ln7ae94sknsv5lpqm0se61mc466g79mq'  passHref>
          <StyledLink>Download</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
