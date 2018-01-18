import React from 'react';
import PropTypes from 'prop-types';
import { FONT_SIZES, FONT_FAMILIES, SPACE } from 'config';
import media from 'utils/media';
import { rem } from 'polished';
import styled from 'styled-components';
import inProgress from './images/inProgress.svg';
import slated from './images/slated.svg';
import completed from './images/completed.svg';

const Title = styled.h4`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  font-weight: 700;
  margin-bottom: ${rem(SPACE[1])};
  color: #16191D;
`;

const Text = styled.p`
  font-family: ${FONT_FAMILIES.sans};
  font-size: ${rem(FONT_SIZES[2])};
  color: #16191D;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  margin-bottom: ${rem(SPACE[5])};
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  text-align: center;
  padding-top: ${rem(SPACE[6])};

  ${media.sm.css`
    width: 50%;
    background: none;
    padding-top: 0;

    &:nth-child(odd) {
      margin-right: ${props => (props.startRight ? 'auto' : 0)};
      margin-left: ${props => (props.startRight ? 0 : 'auto')};
      padding-left: ${props => (!props.startRight ? rem(SPACE[11]) : 0)};
      padding-right: ${props => (props.startRight ? rem(SPACE[11]) : 0)};
      text-align: ${props => (!props.startRight ? 'left' : 'right')};


      &::before {
        left: ${props => (props.startRight ? 'auto' : '8px')};
        right: ${props => (props.startRight ? '8px' : 'auto')};
      }

      &::after {
        left: ${props => (props.startRight ? 'auto' : '-8px')};
        right: ${props => (props.startRight ? '-8px' : 'auto')};
      }
    }

    &:nth-child(even) {
      margin-left: ${props => (props.startRight ? 'auto' : 0)};
      margin-right: ${props => (props.startRight ? 0 : 'auto')};
      padding-left: ${props => (props.startRight ? rem(SPACE[11]) : 0)};
      padding-right: ${props => (!props.startRight ? rem(SPACE[11]) : 0)};
      text-align: ${props => (props.startRight ? 'left' : 'right')};

      &::before {
        left: ${props => (!props.startRight ? 'auto' : '8px')};
        right: ${props => (!props.startRight ? '8px' : 'auto')};
      }

      &::after {
        left: ${props => (!props.startRight ? 'auto' : '-8px')};
        right: ${props => (!props.startRight ? '-8px' : 'auto')};
      }
    }
  `}

  &::before {
    ${media.sm.css`
      content: '';
      width: 50px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 8px;
      transform: translateY(-50%);
      background: #fcb132;
    `}
  }

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-image: url(
      ${(props) => {
        switch (props.status) {
          case 'in-progress':
            return inProgress;
          case 'slated':
            return slated;
          case 'completed':
            return completed;
          default:
            return '';
        }
      }});

    ${media.sm.css`
      top: 50%;
      left: -8px;
      transform: translateY(-50%);
    `}
  }
`;

const Item = ({ body, title, status, startRight }) => (
  <Wrapper status={status} startRight={startRight}>
    {title && <Title>{title}</Title>}
    <Text>{body}</Text>
  </Wrapper>
);


Item.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string,
  status: PropTypes.string,
  startRight: PropTypes.bool,
};

Item.defaultProps = {
  title: '',
  status: 'in-progress',
  startRight: true,
};

export default Item;
