import React, { PureComponent } from 'react';
import { values } from 'ramda';
import { rem } from 'polished';
import { SPACE } from 'config';
import styled from 'styled-components';
import Footer from 'components/Footer';
import Roadmap from './components/Roadmap/Roadmap';
import RoadmapHeader from './components/Header/Header';

import past from './past.json';
import future from './future.json';

const RoadmapWrap = styled.div`
  margin-top: ${rem(SPACE[8])};
`;

export default class RoadmapPage extends PureComponent {
  constructor() {
    super();

    this.state = {
      past: past.data,
      future: future.data,
    };

    this.mergeByYear = this.mergeByYear.bind(this);
    this.markAsComplete = this.markAsComplete.bind(this);
  }


  mergeByYear(list) {
    return list.reduce((acc, item) => {
      const name = item.year;
      const year = acc[name] ? acc[name] : [];

      return {
        ...acc,
        [name]: [
          ...year,
          {
            ...item,
          },
        ],
      };
    }, {});
  }

  markAsComplete(list) {
    return list.map(item => ({ ...item, status: 'completed' }));
  }

  render() {
    const pastList = this.markAsComplete(this.state.past);
    const list = [...pastList, ...this.state.future];
    const years = values(this.mergeByYear(list));

    return (
      <div>
        <RoadmapHeader />
        <RoadmapWrap>
          <Roadmap years={years} />
        </RoadmapWrap>
        <Footer />
      </div>
    );
  }
}
