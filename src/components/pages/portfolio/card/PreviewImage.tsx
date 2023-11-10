import styled from 'styled-components';
import { lightShades, lightAccent, cardGapDesktop } from '../../../layout/vars';
import { BiLinkExternal } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { Card } from '../data';
import { linkProps } from '../data';

const Mask = styled.div`
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: absolute;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  border-radius: 6px;
`;
const Image = styled.div<{ $src: string }>`
  background: ${(props) => `url(${props.$src})`};
  border-radius: 6px;
  width: calc(100% - 5em);
  aspect-ratio: 192/120;
  box-sizing: border-box;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  margin: -${cardGapDesktop} 2.5em 0;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56),
    0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  &:hover {
    ${Mask} {
      opacity: 1;
    }
  }
  @media (max-width: 736px) {
    margin: -2em 1em 0;
    width: calc(100% - 2em);
  }
`;
const StyledButton = styled.a`
  display: inline-flex;

  font-size: 3em;
  padding: 0.15em;
  position: relative;
  color: ${lightShades};
  transition: color 0.2s ease-in-out;
  background-color: #000000a9;
  border-radius: 50%;

  &:hover {
    color: ${lightAccent};
  }
`;
type PreviewImageProps = {
  lang: string;
  card: Card;
};
const PreviewImage = ({ lang, card }: PreviewImageProps) => {
  return (
    <Image $src={card.image}>
      <Mask>
        <StyledButton
          href={card.codeLink}
          {...linkProps}
          title={lang === 'ru' ? 'Посмотреть код' : 'View code'}
        >
          <BsGithub />
        </StyledButton>
        <StyledButton
          href={card.pageLink}
          {...linkProps}
          title={lang === 'ru' ? 'Посмотреть сайт' : 'View site'}
        >
          <BiLinkExternal />
        </StyledButton>
      </Mask>
    </Image>
  );
};
export default PreviewImage;
