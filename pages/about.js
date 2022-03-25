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
      <div class="center">
        <h2>Hello! this is the creator of lila, and i wanted to say this is kinda of a protest agaist schools using NetRef mostly and that it's an invasion of privacy.</h2>
        <h1>___________________________________________________________</h1>
        <h2>Please Suggest Games! Join The Discord :) https://discord.gg/VRYUughAGq</h2>
      </div>

    </>
  );
}
