import { Header, Ru4nicLogo, Section, Title } from '../../layout/layout_styles';
import styled from 'styled-components';

import { motion } from 'framer-motion';

import { IconType } from 'react-icons';

import { BsTelegram } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

import { animationSettings } from '../../../data/animate';
import { lightAccent, lightShades } from '../../layout/vars';

const Icon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: font-size 0.2s ease, color 0.2s ease;
`;
const Button = styled.a`
  display: block;
  height: 1em;
  width: 1em;
  font-size: 2em;
  color: unset;
  text-decoration: none;
  position: relative;
  &:hover {
    ${Icon} {
      font-size: 1.3em;
      color: ${lightAccent};
    }
  }
`;
const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1em;
  margin-top: 2rem;
`;
const Paragraph = styled(motion.p)`
  font-size: 1em;
  text-align: center;
  margin: 0;
  padding: 1em;
  background-color: ${lightShades}0d;
  border: 1px solid ${lightShades}10;
  border-radius: 3px;
`;

type LinkProps = {
  rel: string;
  target: string;
};
const linkProps: LinkProps = {
  rel: 'noreferrer',
  target: '_blank',
};
type Texts = {
  [key: string]: {
    title: string;
    desc: string;
  };
};
const texts: Texts = {
  ru: {
    title: 'Контакты',
    desc: 'Пишите, буду рад сотрудничеству ',
  },
  en: {
    title: 'Contacts',
    desc: 'Write, I will be glad to cooperate ',
  },
};
type SocLinks = {
  href: string;
  icon: IconType;
}[];
const socLinks: SocLinks = [
  {
    href: 'https://github.com/my1hat',
    icon: FaGithub,
  },
  {
    href: 'https://t.me/ru4nic',
    icon: BsTelegram,
  },
  {
    href: 'mailto:my1stjam@bk.ru',
    icon: MdOutlineEmail,
  },
];
type ContactsProps = {
  lang: string;
};
const Contacts = ({ lang }: ContactsProps) => {
  return (
    <Section>
      <Header>
        <Title>{texts[lang].title}</Title>
      </Header>
      <Ru4nicLogo $contacts />
      <Paragraph
        {...animationSettings}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {texts[lang].desc} &#129309;
      </Paragraph>
      <SocialWrapper>
        {socLinks.map((link, index) => {
          return (
            <Button key={index} href={link.href} {...linkProps}>
              <Icon as={link.icon} />
            </Button>
          );
        })}
      </SocialWrapper>
    </Section>
  );
};

export default Contacts;
