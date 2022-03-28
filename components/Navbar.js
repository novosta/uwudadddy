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
        <Link href='https://doc-0c-34-docs.googleusercontent.com/docs/securesc/ibh4g9l5om5356p1v10mbqueu9fdvqui/hbleeakb5t1hmobqvv0cnmo994rsb1vl/1648440075000/00708584378994686374/00708584378994686374/1iixaNBJ9ZcnsgHWuPxPLXAyXA2EiQaJy?e=download&ax=ACxEAsZ037OPzXBX7Pj8roOcXjL_FuFXSi4k_EtnD6Pl5gk6f5D4KVowIXQ32yNy6ShxDMJJ2LCS-c_GKAgjEu0x4qMQ6wvNNo7oHk6J9V4MVCnVxp8myCtf_wvZeM9vxRKQAgpxnI4GSkn0FJNUro4aex6zFPLtb1mi9GAPmgPXQ9z8XHxBgld7bpOUbhKhKXSiykyb_FT3oJu89fi5_-BDTGi1I5EOdHboic1TGPvCoNUKZbLrRHsArjMFWp97r8djR4nXyPbyo6DJWuTgh8KeSKoFIjQyYJhirIrgr0S3Q99Vg2kIqoIuHoKbxXbnobh2vvN3-dcmi3r4oA96z1abOxcpCPoPYzVhsBnb8xf6chKnElHeDbM7R_GRjk5QJKMmnPDgySvI8GwAOCgeDoZ8iOZH2ds_m8uCn1rwmM8gGDvXhQ7xc5hd9ejvLWjKFVOeBbZlS5C0zMqPYfkp_NRhfCMi_Hr38ALN_2E091SnJ1N_Ts99EGwvsuZ-XaH3qllscLaxbbLTsKJSqy-JLmz-hdD5hpS8tIOjtMv2kCCYfcI58iE1kSt5RkcRV9hMZiyAXv_eHHLQh1kkX5gsFfGcB9F3ZYaTm7z21OkxkuGlylAZSCR68JuxCUKctcAfHVOPpUEGyYiTRC58KDWtshdLr1H-5q1vww6OOcZMbcCPZdhARxCLtTTZGkS2kOAs02WwxQmi_cCieSoeqDVC8wer4FXOeVHyfxcqazSAPvxM-afNzE3fLRyWLz-dzUih6trpoWgyNBXYJoD335z24ep6jAaNrPmKU7i70gY3J15inE3DQN4vGP-o1iN4ulKh&authuser=3&nonce=psh0vkjpkrc1s&user=00708584378994686374&hash=14nk6o2l4533c2irk9hg2eic59f397e6'  passHref>
          <StyledLink>Download</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;
