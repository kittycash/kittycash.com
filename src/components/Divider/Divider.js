import styled from 'styled-components';
import { rem } from 'polished';

import media from 'utils/media';
import { COLORS, SPACE } from 'config';

export default styled.div`
  width: ${rem(150)};
  height: 4px;
  background-color: ${COLORS.gray[1]};

  margin: ${rem(SPACE[5])} 0;

  ${media.md.css`
    margin: ${rem(SPACE[9])} 0;
  `}
`;
