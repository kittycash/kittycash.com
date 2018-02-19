import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Container from 'components/Container';
import { COLORS, FONT_FAMILIES } from 'config';
import media from 'utils/media';
import Text from 'components/Text';

const Wrap = styled.div`
   background: #ffffff;
   padding: 20px 0;
`;

const List = styled.div`
 display: flex;
 flex-wrap: wrap;
 margin: 0 -20px;
 justify-content: center;

 ${media.lg.css`
   justify-content: flex-start;
 `};
`;

const ListItemWrap = styled.div`
 padding: 15px;
 max-width: 370px;
 width: 100%;
 box-sizing: border-box;

 ${media.lg.css`
   width: 33.33%;
   max-width: none;
 `}
`;

const ListItem = styled.div`
 min-height: 400px;
 position: relative;
 padding: 10px 15px;

 &::before,
 &::after {
   content: '';
   position: absolute;
 }

 &::before {
   top: 0;
   right: 20px;
   left: 20px;
   bottom: 0;
 }

 &::after {
   top: 20px;
   right: 0;
   left: 0;
   bottom: 20px;
 }
`;

const Img = styled.img.attrs({
  alt: "Limited",
})`
display: block;
width: 100%;
height: auto;
max-width: 100%;
`;

const Name = styled.div`
  font-family: ${FONT_FAMILIES.sans};
  color: ${COLORS.black};
  font-size: 16px;
  font-weight: bold;
  line-height: 28px;
  margin-bottom: 6px;
`;

const Price = styled.div`
  font-family: ${FONT_FAMILIES.sans};
  color: ${COLORS.gray[10]};
  opacity: .3;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 4px;
`;


const Kitty = ({ title, list, id}) => (
  <div>
    <Wrap>
      <Container>
        <List>
          {list.map(({ name, priceBTC, priceSKY, description, img, sold }, i) => (
            <ListItemWrap>
              <ListItem>
                <Img src={img} />
                <Name><FormattedMessage id={name} /></Name>
                <Price>
                  <FormattedMessage id={priceBTC + " BTC | " + priceSKY + " SKY"} />
                  <br/>
                  <FormattedMessage id={sold ? "Owner: " + sold : " "} />
                </Price>
                <Text color="black"><FormattedMessage id={description} /></Text>
              </ListItem>
            </ListItemWrap>
          ))}
        </List>
      </Container>
    </Wrap>
  </div>
);

Kitty.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
};

Kitty.defaultProps = {
  title: '',
  id: '',
};

export default Kitty;
