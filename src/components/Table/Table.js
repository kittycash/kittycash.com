import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';

import Text from 'components/Text';
import { COLORS, SPACE } from 'config';

export const TableWrapper = styled(Text).attrs({
  as: 'div',
  color: 'black',
  fontSize: [1, 2],
  heavy: true,
})`
  overflow-x: auto;
  margin-right: -${rem(SPACE[4])};
  padding-right: ${rem(SPACE[4])};
  margin-left: -${rem(SPACE[4])};
  padding-left: ${rem(SPACE[4])};
  margin-bottom: ${rem(SPACE[4])};
`;

export default styled.table`
  width: 100%;
  border-bottom: 1px solid #787A7D;
  min-width: ${rem(800)};

  td, th {
    border-top: 1px solid #787A7D;
    height: ${rem(40)};

    ${media.sm.css`
      height: ${rem(50)};
    `}
  }

  a {
    color: ${COLORS.base};
  }
`;
