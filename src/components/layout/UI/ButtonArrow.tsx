import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { gap, lightAccent } from '../vars';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${gap};
`;
export const IconWrapp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  /* top: 50%; */
  bottom: 30%;
  right: 0;
  // font-size: 1.3em;
  /* transform: translate(0, -30%); */
  background: ${lightAccent}f1;
  color: #fff;
  width: 4.5rem;
  height: 4.5rem;
  transition: width 0.15s ease-in-out;
  @media (max-width: 736px) {
    width: 3rem;
    height: 3rem;
  }
`;
export const LinkComponent = styled(Link)`
  /* display: inline-block; */
  /* margin-left: auto; */

  ${IconWrapp} {
    bottom: 0;
    transform: none;
    position: static;
    /* background-color: ${lightAccent}; */
    /* color: ${lightAccent}; */
  }
  &:hover {
    ${IconWrapp} {
      width: 6rem;
    }
  }
`;

export const Icon = styled(FaChevronRight)`
  font-size: 3rem;
  @media (max-width: 736px) {
    font-size: 2rem;
  }
`;
type ButtonArrowProps = {
  to: string;
};
const ButtonArrow = ({ to }: ButtonArrowProps) => {
  return (
    <Wrapper>
      <LinkComponent to={to}>
        <IconWrapp>
          <Icon />
        </IconWrapp>
      </LinkComponent>
    </Wrapper>
  );
};
export default ButtonArrow;
