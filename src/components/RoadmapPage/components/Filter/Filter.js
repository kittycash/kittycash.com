import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { rem } from 'polished';
import styled from 'styled-components';
import Select from 'components/Select';
import Container from 'components/Container';

import { FONT_FAMILIES, FONT_SIZES, SPACE } from 'config';

const Wrap = styled.div`
  background: rgba(0, 0, 0, .3);
`;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  align-items: center;
`;

const Text = styled.div`
  font-family: ${FONT_FAMILIES.mono};
  font-weight: 700;
  font-size: ${rem(FONT_SIZES[1])};
  color: #fff;
  margin-right: ${rem(SPACE[5])};
`;

const SelectItem = styled.div`
  &:not(:last-of-type) {
    margin-right: ${rem(SPACE[11])};
  }
`;

export default class Filter extends PureComponent {
  constructor() {
    super();

    this.state = {
      status: {
        current: {
          title: 'All',
          id: 'all',
        },
      },
      tags: {
        current: {
          title: 'All',
          id: 'all',
        },
      },
    };

    this.handleSelectStatus = this.handleSelectStatus.bind(this);
    this.handleSelectTag = this.handleSelectTag.bind(this);
    this.getTagsList = this.getTagsList.bind(this);
  }

  getTagsList() {
    const list = this.props.tags.reduce((acc, item) => ([
      ...acc,
      {
        id: item.toLowerCase(),
        title: `${item[0].toUpperCase()}${item.slice(1)}`,
      },
    ]), []);

    return [
      {
        id: 'all',
        title: 'All',
      },
      ...list,
    ];
  }

  handleSelectStatus(item) {
    this.setState({
      status: {
        current: item,
      },
    });
    this.props.onStatusSelect(item.id);
  }

  handleSelectTag(item) {
    this.setState({
      tags: {
        current: item,
      },
    });
    this.props.onTagsSelect(item.id);
  }

  render() {
    const tagsCurrent = this.state.tags.current;

    return (
      <Wrap>
        <Container>
          <Filters>
            <Text>Tags: </Text>
            <SelectItem>
              <Select
                onSelect={this.handleSelectTag}
                list={this.getTagsList()}
                current={tagsCurrent}
              />
            </SelectItem>
          </Filters>
        </Container>
      </Wrap>
    );
  }
}

Filter.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTagsSelect: PropTypes.func.isRequired,
  onStatusSelect: PropTypes.func.isRequired,
};

