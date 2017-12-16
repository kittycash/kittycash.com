import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import { FormattedMessage } from 'react-intl';
import { rem } from 'polished';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Text from 'components/Text';
import Table, { TableWrapper } from 'components/Table';
import Link from 'components/Link';
import { COLORS, SPACE, BREAKPOINTS } from 'config';

const StyledTable = Table.extend`
  td {
    &:first-of-type {
      width: 77.33%;
    }
  }
  @media (max-width: ${BREAKPOINTS.sm}rem) {
    min-width: 0;
    border: 0;

    tr {
      display: block;
      padding: ${rem(SPACE[4])} 0;
      border-top: 1px solid ${COLORS.gray[1]};
    }

    td {
      border: 0;
      display: block;
      height: auto;

      &:first-of-type {
        width: auto;
      }
    }
  }
`;

const DownladsTable = ({ title, list, id }) => (
  <div>
    <Container>
      <Box width={[1 / 1, 1 / 1, 2 / 3]} my={[5, 7]}>
        <Heading heavy as="h2" fontSize={[5, 6]} color="black" mb={[4, 6]} id={id}>
          <FormattedMessage id={title} />
        </Heading>
      </Box>

      <TableWrapper>
        <StyledTable>
          <tbody>
            {list.map(({ name, download, filetype, filesize }, i) => (
              <tr key={i}>
                <td>{name}</td>

                <td>
                  <Link target="_blank" href={download}>
                    <FormattedMessage id="downloads.whitekitties.download" />
                    &nbsp;
                    ({filetype})
                  </Link>
                </td>

                <td>
                  <Text as="span" color="gray.7" heavy>
                    {filesize}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableWrapper>
    </Container>
  </div>
);

DownladsTable.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
};

DownladsTable.defaultProps = {
  title: '',
  id: '',
};

export default DownladsTable;
