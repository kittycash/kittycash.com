import React, {PureComponent } from 'react';
import { values } from 'ramda';
import { rem } from 'polished';
import { SPACE } from 'config';
import styled from 'styled-components';
import Footer from 'components/Footer';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import Roadmap from './components/Roadmap/Roadmap';
import RoadmapHeader from './components/Header/Header';

import past from './past.json';
import future from './future.json';

const RoadmapWrap = styled.div`
  margin-top: ${rem(SPACE[8])};
`;

class RoadmapPage extends PureComponent {
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
    const list = [...this.state.future, ...pastList];
    const years = values(this.mergeByYear(list));
    return (
      <div>
        <Helmet>
          <title>{this.props.intl.formatMessage({ id: 'roadmapPage.title' })}</title>
          <meta
            name="description"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.description' })}
          />
          <meta
            name="twitter:title"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.twitter.title' })}
          />
          <meta
            name="twitter:description"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.twitter.description' })}
          />
          <meta
            name="twitter:image"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.twitter.image' })}
          />
          <meta
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            property="og:title"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.facebook.title' })}
          />
          <meta
            property="og:description"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.facebook.description' })}
          />
          <meta
            property="og:image"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.facebook.image' })}
          />
          <meta
            property="og:url"
            content={this.props.intl.formatMessage({ id: 'roadmapPage.facebook.url' })}
          />
        </Helmet>
        <RoadmapHeader><span></span></RoadmapHeader>
        <RoadmapWrap>
          <Roadmap years={years} />
        </RoadmapWrap>
        <Footer />
      </div>
    );
  }
}

export default injectIntl(RoadmapPage);
