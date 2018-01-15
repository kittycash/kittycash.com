import styled from 'styled-components';

import media from 'utils/media';
import sticker from './sticker.png';

export default styled.div`
  background-image: url(${sticker});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  height: 50%;
  width: 60%;
  top: 20%;
  left: 40%;
  pointer-events: none;

  ${media.md.css`
    background-size: contain;
    width: 60%;
    left: 45%;
  `}

  ${media.lg.css`
    background-size: contain;
    top: 15%;
    width: 70%;
    left: 45%;
    height: 70%;
  `}

`;
