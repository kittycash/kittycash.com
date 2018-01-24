import React from 'react';

import DownloadsTable from 'components/DownloadsTable';

import content from './content';


export default () => (
  <DownloadsTable list={content} title="downloads.branding.heading" id="branding" />
);
