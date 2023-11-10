import styled from 'styled-components';
import { desktopPadding, gap, mobilePadding, darkShades } from './vars';
import { motion } from 'framer-motion';
import logo from '../../assets/img/ru4nic_logo1.svg';

export const Wrapper = styled.div`
  width: 45em;
  margin: 0 auto;
  min-height: 100vh;
  max-width: 100%;
  /* padding: 0 0 1em 0; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease-in-out;
  @media (max-width: 980px) {
    /* padding: 1.5em 0; */
    /* padding-bottom: 1.5em; */
    max-width: calc(100% - 8em);
  }
  @media (max-width: 736px) {
    /* padding: 1em 0; */
    /* padding: 0; */
    /* padding-bottom: 1em; */
    /* max-width: calc(100% - 2em); */
    max-width: 100%;
  }
  /* @media (max-width: 360px) {
  } */
`;
export const Header = styled.header`
  margin-bottom: ${gap};
`;
export const SectionHome = styled.section`
  padding: 0;
  height: 20em;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${darkShades};
  position: relative;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 980px) {
    flex-direction: column;
    height: auto;
  }
`;

export const Section = styled(SectionHome)`
  display: block;
  height: auto;

  padding: ${desktopPadding};
  @media (max-width: 736px) {
    padding: ${mobilePadding};
  }
`;

export const Title = styled(motion.h1)<{ $home?: boolean }>`
  font-size: 2.4em;
  margin: ${(props) => (props.$home ? '0 0 0.5em 0' : '0')};
  font-family: 'BoldSans';
  font-weight: 700;
  @media (max-width: 736px) {
    font-size: 1.75em;
  }
`;

export const Ru4nicLogo = styled.div<{ $contacts?: boolean }>`
  background-image: url(${logo});
  /* height: 6rem; */
  aspect-ratio: 193/150;
  background-repeat: no-repeat;
  width: 8rem;
  background-size: cover;
  margin: ${(props) => !props.$contacts && '0 0 1rem 1rem'};
  margin: ${(props) => props.$contacts && '4rem auto'};
  @media (max-width: 980px) {
    width: 7rem;
    margin: ${(props) => !props.$contacts && '0 auto 1rem auto'};
  }
`;
