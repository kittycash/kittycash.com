import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { COLORS, SPACE, FONT_FAMILIES, FONT_SIZES } from 'config';
import { rem } from 'polished';
import ArrowIcon from './images/arrow.svg';

const Wrap = styled.div`
  position: relative;
  width: 228px;
`;

const Current = styled.div`
  height: 36px;
  border: 1px solid #646D77;
  background: #fff;
  border-radius: 5px;
  padding-left: 12px;
  padding-top: 9px;
  box-sizing: border-box;
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[1])};
  font-weight: 700;
  cursor: pointer;
  padding-right: 44px;
  transition: background .2s ease-in-out;

  &:hover {
    background: ${COLORS.gray[1]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 42px;
    width: 1px;
    background: #646D77;
  }

  &::after {
    content: '';
    width: 14px;
    height: 8px;
    background: url(${ArrowIcon}) no-repeat;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

const List = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 228px;
  background: #fff;
  border: 1px solid #646D77;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  overflow: hidden;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

const Item = styled.div`
  padding: ${rem(SPACE[2])};
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[1])};
  box-sizing: border-box;
  transition: background .2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${COLORS.gray[1]};
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #646D77;
  }
`;

export default class Select extends PureComponent {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.handleCurrentClick = this.handleCurrentClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleCurrentClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  handleItemClick(id) {
    return () => {
      this.props.onSelect(id);

      this.setState({
        open: false,
      });
    };
  }


  render() {
    return (
      <Wrap>
        <Current onClick={this.handleCurrentClick}>{this.props.current.title}</Current>
        <List show={this.state.open}>
          {this.props.list.map(item => item.id !== this.props.current.id && <Item
            key={item.id}
            onClick={this.handleItemClick(item)}
            selected={this.props.current.id === item.id}
          >{item.title}</Item>,
          )}
        </List>
      </Wrap>
    );
  }
}

Select.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  current: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

