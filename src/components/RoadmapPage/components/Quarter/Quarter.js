import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { COLORS, FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';
import { rem } from 'polished';
import styled from 'styled-components';
import Item from '../Item/Item';

const Text = styled.div`
  font-family: ${FONT_FAMILIES.mono};
  font-style: italic;
  font-weight: 700;
  font-size: ${rem(FONT_SIZES[1])};
  margin: ${rem(SPACE[5])} 0;
  color: ${COLORS.gray[8]};
  text-align: center;
`;

export default class Quarter extends PureComponent {
  render() {
    return (
      <div>
        {this.props.list.map((item, i) => (
          <div key={i}>
            {item.list.map((roadmapItem, key) => (
              <Item
                body={roadmapItem.body}
                title={roadmapItem.title}
                startRight={item.startRight}
                status={roadmapItem.status}
                key={key}
              />
            ))}
            <Text>Q{item.list[0].quarter}</Text>
          </div>
        ))}
      </div>
    );
  }
}

Quarter.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
