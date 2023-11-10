import { Dispatch, SetStateAction } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { darkShades, lightShades } from '../../layout/vars';
import { FaHome, FaFolder, FaRegEnvelope, FaUserCircle } from 'react-icons/fa';

const NavMenu = styled.nav`
  height: 4.25em;
  margin-top: 1em;
  @media (max-width: 980px) {
    margin-top: 1.5em;
    max-width: calc(100% - 8em);
  }
  @media (max-width: 736px) {
    margin-top: 1em;
    max-width: calc(100% - 2em);
  }
  @media (max-width: 360px) {
    max-width: 100%;
  }
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 1rem;
`;
const NavLinkTitle = styled.span`
  font-family: 'extraLightSans';
  position: absolute;
  background: #222222;
  font-size: 0.3em;
  /* padding: 0 0.5rem; */
  height: 2.25em;
  line-height: 2.25em;
  text-align: center;
  border-radius: 5px;
  top: -2.75em;
  left: 50%;
  color: ${lightShades};
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
  /* width: 5.5em; */
  width: max-content;
  /* margin-left: -2.75em; */
  transform: translateX(-50%);
  padding: 0 0.5em;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    left: 50%;
    margin-left: -0.6em;

    border-top: solid 0.6em #222222;
    border-left: solid 0.6em transparent;
    border-right: solid 0.6em transparent;
  }
  @media (max-width: 980px) {
    display: none;
  }
`;
const StyledNavLink = styled(NavLink)`
  color: ${darkShades};
  font-size: 2.2em;
  transition: opacity 0.25s ease-in-out;
  opacity: 0.35;
  display: inline-flex;
  position: relative;

  &:hover {
    opacity: 1;

    ${NavLinkTitle} {
      opacity: 1;
    }
  }

  &.active {
    opacity: 1;
  }
`;
const LangWrapp = styled.div`
  margin-left: 1em;
  border-radius: 1em;
`;
const Lang = styled.span<{ $enLang?: boolean; $ruLang?: boolean }>`
  font-size: 1em;
  color: ${(props) =>
    props.$ruLang ? lightShades : props.$enLang ? lightShades : darkShades};
  padding: 0 0.2em;
  display: inline-block;
  border: 4px solid ${darkShades};
  border-right: ${(props) => (props.$ruLang ? '0' : '')};
  border-left: ${(props) => (props.$enLang ? '0' : '')};
  background-color: ${(props) =>
    props.$ruLang ? darkShades : props.$enLang ? darkShades : ''};
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:first-child {
    border-radius: 7px 0 0 7px;
  }
  &:last-child {
    border-radius: 0 7px 7px 0;
  }
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.$ruLang
        ? `${darkShades}cc`
        : props.$enLang
        ? `${darkShades}cc`
        : `${darkShades}15`};
  }
`;

type MenuProps = {
  lang: string;
  setLang: Dispatch<SetStateAction<'ru' | 'en'>>;
};
interface Texts {
  [key: string]: {
    home: string;
    about: string;
    portfolio: string;
    contacts: string;
    ruLang: string;
    enLang: string;
  };
}
const texts: Texts = {
  ru: {
    home: 'Главная',
    about: 'Обо мне',
    portfolio: 'Портфолио',
    contacts: 'Контакты',
    ruLang: 'русский язык',
    enLang: 'английский язык',
  },
  en: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    contacts: 'Contacts',
    ruLang: 'russian',
    enLang: 'english',
  },
};
const Menu = ({ lang, setLang }: MenuProps) => {
  const ruLang = lang === 'ru';
  const enLang = lang === 'en';

  const toogleLang = () => {
    //Переключаем язык сайта и записываем в localStorage
    if (ruLang) {
      setLang('en');
      localStorage.setItem('language', 'en');
    } else {
      setLang('ru');
      localStorage.setItem('language', 'ru');
    }
  };

  return (
    <NavMenu>
      <StyledNavLink to='.' end>
        <FaHome />
        <NavLinkTitle>{texts[lang].home}</NavLinkTitle>
      </StyledNavLink>
      <StyledNavLink to='./about'>
        <FaUserCircle />
        <NavLinkTitle>{texts[lang].about}</NavLinkTitle>
      </StyledNavLink>
      <StyledNavLink to='./portfolio'>
        <FaFolder />
        <NavLinkTitle>{texts[lang].portfolio}</NavLinkTitle>
      </StyledNavLink>
      <StyledNavLink to='./contacts'>
        <FaRegEnvelope />
        <NavLinkTitle>{texts[lang].contacts}</NavLinkTitle>
      </StyledNavLink>
      <LangWrapp>
        <Lang $ruLang={ruLang} onClick={toogleLang} title={texts[lang].ruLang}>
          RU
        </Lang>
        <Lang $enLang={enLang} onClick={toogleLang} title={texts[lang].enLang}>
          EN
        </Lang>
      </LangWrapp>
    </NavMenu>
  );
};
export default Menu;
