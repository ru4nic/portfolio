import styled from 'styled-components';
import { darkShades, lightAccent } from '../../../layout/vars';

import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub, BsFileEarmarkImageFill } from 'react-icons/bs';
import { PiCalendarCheckFill } from 'react-icons/pi';
import { linkProps } from '../data';

const Desc = styled.p`
  font-family: 'lightSans';
  font-size: 1em;
  font-weight: 300;
  line-height: 1.3;
  margin: 1em 0 0;
  text-align: left;
`;

const ContentCard = styled.div`
  padding: 2em 3em;
  @media (max-width: 736px) {
    padding: 1.5em;
  }
`;
const Category = styled.div`
  font-size: 0.8em;
  align-items: center;
  font-family: 'RegularSans';
  color: ${darkShades};
  display: inline-flex;
  margin-right: 1.4rem;
  font-weight: 400;
  .icon {
    margin-right: 0.5em;
    font-size: 1.2em;
  }
`;
const LogoCompany = styled.img`
  width: 13rem;
  border-radius: 10px;
  display: block;
  margin-top: 1em;
  @media (max-width: 1000px) {
    width: 17vmax;
    border-radius: 6px;
  }
`;
const TechWrapp = styled.ul`
  display: flex;
  flex-wrap: wrap;

  flex-direction: column;

  padding: 0;
  margin: 0;
`;
const Tech = styled.li`
  list-style-type: circle;
  list-style-position: inside;
  font-family: 'lightsans';
  font-size: 0.9em;
  position: relative;
  padding: 0 0.3em;
  border-radius: 0.3em;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  margin: 2em 0;
  gap: 1em;
`;
const CardButton = styled.a`
  font-size: 2rem;
  display: inline-flex;
  padding: 0em 1em;
  background-color: ${lightAccent};
  border-radius: 0.2em;
  .button-icon {
    color: #fff;
    padding: 0.3em;
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }
  &:hover {
    .button-icon {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1000px) {
    font-size: 1.4rem;
  }
`;
type ContentProps = {
  lang: string;
  card: {
    year: string;
    category: string;
    techs: string[];
    codeLink: string;
    pageLink: string;
    logo: string;
    desc: string[];
  };
};
const Content = ({ card, lang }: ContentProps) => {
  const { year, category, techs, codeLink, pageLink, logo, desc } = card;
  return (
    <ContentCard>
      <Category>
        <PiCalendarCheckFill className='icon' />
        {year}
      </Category>
      <Category>
        <BsFileEarmarkImageFill className='icon' />
        {category}
      </Category>
      <LogoCompany src={logo} />
      {desc.map((item, index) => {
        return <Desc key={index}>{item}</Desc>;
      })}
      <ButtonsWrapper>
        <CardButton
          href={codeLink}
          {...linkProps}
          title={lang === 'ru' ? 'Посмотреть код' : 'View code'}
        >
          <BsGithub className='button-icon' />
        </CardButton>
        <CardButton
          href={pageLink}
          {...linkProps}
          title={lang === 'ru' ? 'Посмотреть сайт' : 'View site'}
        >
          <BiLinkExternal className='button-icon' />
        </CardButton>
      </ButtonsWrapper>
      <TechWrapp>
        {techs.map((tech) => {
          return <Tech key={tech}>{tech}</Tech>;
        })}
      </TechWrapp>
    </ContentCard>
  );
};
export default Content;
