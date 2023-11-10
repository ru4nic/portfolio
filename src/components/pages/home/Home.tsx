import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { SectionHome } from '../../layout/layout_styles';
import overlay from '../../../assets/img/overlay.png';
import { lightShades, desktopPadding } from '../../layout/vars';
import { motion } from 'framer-motion';

import { Ru4nicLogo } from '../../layout/layout_styles';
import { Icon, IconWrapp } from '../../layout/UI/ButtonArrow';

import img from '../../../assets/img/avatar.jpg';

import { animationSettings } from '../../../data/animate';

const HeaderHome = styled.header`
  flex-grow: 1;
  flex-shrink: 1;
  padding: ${desktopPadding};
  /* margin-bottom: 0; */
  width: 100%;
  box-sizing: inherit;
  @media (max-width: 980px) {
    padding: 4em;
    text-align: center;
  }
  @media (max-width: 736px) {
    padding: 2.75em 2em 2.5em 2em;
  }
`;

const Desc = styled(motion.p)`
  /* font-family: 'SansProLight'; */
  font-size: 1.25em;
  letter-spacing: -0.015em;
  color: ${lightShades};
  margin: 0;
`;

const IconLink = styled(Link)`
  position: relative;
  object-position: center;
  flex-grow: 0;
  flex-shrink: 0;
  width: 17em;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: url(${overlay});
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  &:hover {
    ${IconWrapp} {
      width: 6rem;
      // padding-right: 1em;
    }
  }
  @media (max-width: 980px) {
    height: 25em;
    width: 100%;
  }
  @media (max-width: 736px) {
    height: 20em;
  }
`;
const Image = styled.img`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 20%;
  filter: grayscale(0.5);
`;

type HomeProps = {
  lang: string;
};

type Texts = {
  [key: string]: {
    desc: string;
  };
};
const texts: Texts = {
  ru: {
    desc: 'Фронтенд Разработчик',
  },
  en: {
    desc: 'Frontend Developer',
  },
};

const Home = ({ lang }: HomeProps) => {
  return (
    <SectionHome>
      <HeaderHome>
        <Ru4nicLogo />
        <Desc {...animationSettings} transition={{ duration: 0.5, delay: 0.8 }}>
          {texts[lang].desc}
        </Desc>
      </HeaderHome>
      <IconLink to='about'>
        <IconWrapp>
          <Icon />
        </IconWrapp>
        <Image src={img} alt='ru4nic' />
      </IconLink>
    </SectionHome>
  );
};

export default Home;
