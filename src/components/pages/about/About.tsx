import styled from 'styled-components';

import { motion } from 'framer-motion';

import { Section, Title, Header } from '../../layout/layout_styles';
import { animationSettings } from '../../../data/animate';
import ButtonArrow from '../../layout/UI/ButtonArrow';
import { gap, lightShades, mainBrandColor } from '../../layout/vars';

const Paragraph = styled(motion.p)`
  font-size: 1em;
  margin: 0 0 0.6em 0;
  line-height: 1.2em;
  background-color: ${lightShades}0d;
  border: 1px solid ${lightShades}10;
  padding: 1em;
  border-radius: 4px;
`;

const Skills = styled.h3`
  font-family: 'SemiBoldSans';
  font-weight: 600;
  /* text-align: center; */
  font-size: 1.3em;
  margin: 0 0 1em 0;
  /* padding: 0 0 0 1.2em; */
  text-decoration: underline;
  color: ${mainBrandColor};
`;
const List = styled(motion.ul)`
  list-style-position: inside;
  padding: ${gap} 0 0 0em;
  margin: 0;
  position: relative;
  /* width: 40%; */
`;
const Item = styled.li`
  font-size: 0.9em;
  line-height: 1.3;
  font-family: 'regularsans';
  font-weight: 400;
`;

interface Texts {
  [key: string]: {
    title: string;
    paragraph: string[];
    skills: string;
  };
}
const texts: Texts = {
  ru: {
    title: 'Обо мне',
    paragraph: [
      'Привет 👋 !',
      'Меня зовут Сергей.',
      'Я активно развиваюсь в сфере веб-разработки. Инициативен и самостоятелен.',
    ],
    skills: 'Навыки:',
  },
  en: {
    title: 'About',
    paragraph: [
      'Hello 👋 !',
      'My name is Sergey.',
      'I am actively developing in the field of web development. Initiative and independent.',
    ],
    skills: 'Skills:',
  },
};

type AboutProps = {
  lang: string;
};
const About = ({ lang }: AboutProps) => {
  return (
    <Section>
      <Header>
        <Title>{texts[lang].title}</Title>
      </Header>

      {texts[lang].paragraph.map((text, index) => (
        <Paragraph
          key={index}
          {...animationSettings}
          transition={{ duration: 0.5, delay: 0.5 + index / 2 }}
        >
          {text}
        </Paragraph>
      ))}

      <List {...animationSettings} transition={{ duration: 0.5, delay: 2 }}>
        <Skills>{texts[lang].skills}</Skills>
        <Item>JavaScript</Item>
        <Item>React</Item>
        <Item>TypeScript</Item>
        <Item>Redux</Item>
        <Item>Sass</Item>
        <Item>Styled components</Item>
        <Item>Git</Item>
        <Item>Vite</Item>
        <Item>Mui</Item>
      </List>
      <ButtonArrow to="../portfolio" />
    </Section>
  );
};
export default About;
