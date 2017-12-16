import styled from 'styled-components';
import { rem } from 'polished';

import { COLORS, FONT_SIZES, FONT_FAMILIES, BOX_SHADOWS, SPACE, BORDER_RADIUS } from 'config';

export default styled.span`
  background-color: ${COLORS.blue[5]};
  border-radius: ${BORDER_RADIUS.base};
  box-shadow: ${BOX_SHADOWS.base};
  font-family: ${FONT_FAMILIES.mono};
  font-size: ${rem(FONT_SIZES[0])};
  padding: ${rem(SPACE[2])} ${rem(SPACE[3])};

  color: white;
  display: inline-block;
  font-weight: 600;
  text-transform: uppercase;
`;
