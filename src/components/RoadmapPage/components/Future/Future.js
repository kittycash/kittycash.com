import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SPACE, COLORS, FONT_FAMILIES, FONT_SIZES } from 'config';
import { rem } from 'polished';
import Container from 'components/Container';
import Line from './images/line.svg';
import Item from '../Item/Item';

const Wrap = styled.div`
  margin-top: 60px;
`;

const Title = styled.div`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background-image: linear-gradient(-180deg, #ECEEF0 0%, #FFFFFF 100%);
  border: 2px solid ${COLORS.blue[5]};
  color: ${COLORS.blue[5]};
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[1])};
  font-weight: 700;
  margin: 0 auto ${rem(SPACE[5])};
`;

const Button = styled.button`
  width: 160px;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  text-align: center;
  font-family: ${FONT_FAMILIES.mono};
  font-weight: 700;
  font-size: ${rem(FONT_SIZES[1])};
  border-radius: 5px;
  border: 1px solid ${COLORS.blue[5]};
  color: ${COLORS.blue[5]};
  margin: auto;
  background: #fff;
  padding: 0;
  cursor: pointer;
  transition: background .2s ease-in-out;

  &:hover {
    background: ${COLORS.blue[5]};
    color: #fff;
  }
`;

const List = styled.div`
  min-height: 128px;
  display: flex;
  justify-content: center;
  background: url(${Line}) repeat-y 50% 50%;
  flex-direction: column;
`;

export default class Future extends PureComponent {
  constructor() {
    super();

    this.state = { showList: false };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({
      showList: true,
    });
  }

  render() {
    return (
      <Wrap>
        <Container>
          <Title>Future</Title>
          <List>
            {!this.state.showList && <Button onClick={this.handleButtonClick}>Show future</Button>}
            {this.state.showList && this.props.list.map(roadmapItem => (
              <Item
                body={roadmapItem.body}
                title={roadmapItem.title}
                tags={roadmapItem.tags}
                status={roadmapItem.status}
              />
            ))}
          </List>
        </Container>
      </Wrap>
    );
  }
}

Future.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
