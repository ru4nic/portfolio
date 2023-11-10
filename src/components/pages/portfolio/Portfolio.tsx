import { texts } from './data';
import { Header, Section, Title } from '../../layout/layout_styles';

import ButtonArrow from '../../layout/UI/ButtonArrow';
import CardInfo from './card';

type PortfolioProps = {
  lang: string;
};
const Portfolio = ({ lang }: PortfolioProps) => {
  return (
    <Section>
      <Header>
        <Title>{texts[lang].title}</Title>
      </Header>
      <CardInfo lang={lang} />
      <ButtonArrow to='../contacts' />
    </Section>
  );
};
export default Portfolio;
