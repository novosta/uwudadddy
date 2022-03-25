import Head from 'next/head';
import styled from 'styled-components';

const Hero = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

const Heading = styled.h1`
  color: #000;
  font-size: 10rem;
  font-weight: 900;
`;

const Hero = styled.section`
	background-color:white;
	width: 80%;
	display: inline-block;
  margin: 0 auto;
`;


export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero>
        <Heading>ABOUT</Heading>
      </Hero>
      <section>
      <h1>test</h1>
      </section>
    </>
  );
}
