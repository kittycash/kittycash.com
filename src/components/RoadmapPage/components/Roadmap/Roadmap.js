import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { values } from 'ramda';
import { FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import Container from 'components/Container';
import Quarter from '../Quarter/Quarter';

const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Year = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-image: linear-gradient(0deg, #fcb132, #fcb132);
  margin: ${rem(SPACE[5])} auto;
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[2])};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const YearWrapper = styled.div`
  position: relative;
  width: 100%;

  &:last-of-type {
    padding-bottom: 300px;

    &::after {
      bottom: -9999px;
    }
  }

  &::after {
    content: '';
    width: 1px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #EFF0F0;
    z-index: -1;
  }
`;

export default class Roadmap extends PureComponent {
  constructor() {
    super();

    this.mergyByQuarter = this.mergyByQuarter.bind(this);
  }

  mergyByQuarter(year) {
    return year.reduce((acc, item) => {
      const quarter = acc[item.quarter] ? acc[item.quarter] : [];

      return {
        ...acc,
        [item.quarter]: [
          ...quarter,
          item,
        ],
      };
    }, {});
  }

  checkFirstYear({ index, array, i }) {
    return index === 0 && array[i - 1].length % 2 === 0;
  }

  checkNextYfirstQ({ index, i, acc: arr }) {
    if (index === 0 || i !== 0) {
      return false;
    }
    const prev = arr[index - 1][arr[index - 1].length - 1];
    return (prev.startRight && prev.list.length % 2 === 0) ||
      (!prev.startRight && prev.list.length % 2 !== 0);
  }

  checkNextYQ({ index, newObject: arr, i }) {
    if (index === 0 || i === 0) {
      return false;
    }

    const prev = arr[i - 1];

    return (prev.startRight && prev.list.length % 2 === 0) ||
      (!prev.startRight && prev.list.length % 2 !== 0);
  }

  render() {
    const years = this.props.years.sort((a, b) => (
      (!a[0].future && b[0].future) || (a[0].year < b[0].year) ? 1 : -1
    ));
    const quarters = years.map(item => values(this.mergyByQuarter(item)).reverse());
    const list = quarters.reduce((acc, item, index) => {
      const newItem = item.reduce((newObject, current, i, array) => [
        ...newObject,
        {
          list: current,
          startRight: (index === 0 && i === 0) ||
            this.checkFirstYear({ index, array, i }) ||
            this.checkNextYfirstQ({ index, i, acc }) ||
            this.checkNextYQ({ index, newObject, i }),
        },
      ], []);

      return [
        ...acc,
        newItem,
      ];
    }, []);

    return (
      <Container>
        <Wrapper>
          {years.map((item, index) => (
            <YearWrapper key={index}>
              <Quarter index={index} list={list[index]} />
              <Year>{item[0].year}</Year>
            </YearWrapper>
          ))}
        </Wrapper>
      </Container>
    );
  }
}

Roadmap.propTypes = {
  years: PropTypes.arrayOf(PropTypes.object).isRequired,
};
