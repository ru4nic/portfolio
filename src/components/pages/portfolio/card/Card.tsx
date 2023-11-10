import styled from 'styled-components';
import {
  gap,
  lightShades,
  darkShades,
  cardGapDesktop,
} from '../../../layout/vars';
import { texts } from '../data';
import { motion } from 'framer-motion';
import { animationSettings } from '../../../../data/animate';

import PreviewImage from './PreviewImage';
import Content from './Content';

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: ${gap};
  align-items: center;
`;
const CardInfo = styled(motion.div)`
  width: 80%;
  margin: ${cardGapDesktop} 0 0;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  background-color: ${lightShades};
  color: ${darkShades};
  @media (max-width: 736px) {
    width: 100%;
  }
`;

type CardProps = {
  lang: string;
};
const Card = ({ lang }: CardProps) => {
  return (
    <CardsWrapper>
      {texts[lang].cards.map((card, index) => {
        return (
          <CardInfo
            key={index}
            {...animationSettings}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PreviewImage lang={lang} card={card} />
            <Content lang={lang} card={card} />
          </CardInfo>
        );
      })}
    </CardsWrapper>
  );
};
export default Card;
