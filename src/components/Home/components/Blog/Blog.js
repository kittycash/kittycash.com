import React, { Component } from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

import { COLORS, FONT_SIZES, FONT_FAMILIES, SPACE } from 'config';
import Container from 'components/Container';
import Button from 'components/Button';

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      posts: []
    };
  }

  componentDidMount() {
    fetch("/blog/index.xml")
      .then((res) => {
        //Check if the response is valid.  If not, issue an error
        if (res.status >= 200 && res.status < 300) {
          return Promise.resolve(res.text())
        } else {
          var error = new Error(res.statusText || res.status)
          error.response = res.text()
          return Promise.reject(error)
        }
      })
      .then(
        (result) => {

          const parseString = require('react-native-xml2js').parseString;
          const striptags = require('striptags');
          const Entities = require('html-entities').AllHtmlEntities;
          const entities = new Entities();

          const _this = this;

          //Ensure there are no html tags and decode all the HTML entities from the blog
          const cleanValues = function(value)
          {
              return entities.decode(striptags(value));
          }

          parseString(result, {trim: true, explicitArray: false, valueProcessors: [cleanValues]}, function (err, data) {
            if (data && data.rss && data.rss.channel && data.rss.channel.item)
            {
               _this.setState({
                isLoaded: true,
                posts: data.rss.channel.item.slice(0, 3)
              });
            }
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, posts } = this.state;

    const BlogTitle = styled.h1`
      margin-top: ${rem(SPACE[5])};
      font-family: ${FONT_FAMILIES.mono};
      font-size: ${rem(FONT_SIZES[15])};
      color: #000000;
      text-decoration: none;
      text-align: center;
    `;

    const BlogPost = styled.div`
      text-align: left;
      background-color: ${COLORS.gray[0]};
      border-top: 2px solid ${COLORS.gray[1]};
      padding-bottom: 10px;
    `;

    const BlogPostTitle = styled.h1`
      margin-top: ${rem(SPACE[5])};
      font-family: ${FONT_FAMILIES.mono};
      font-size: ${rem(FONT_SIZES[15])};
      color: #000000;
      text-decoration: none;
    `;

    const BlogLoading = styled.h1`
      margin-top: ${rem(SPACE[5])};
      font-family: ${FONT_FAMILIES.mono};
      font-size: ${rem(FONT_SIZES[15])};
      color: #000000;
      text-decoration: none;
      text-align: center;
    `;

    const BlogError = styled.div`
    `;

    function Blog() {

      if (error)
      {
        //Return an empty div if there is an error fetching the recent blog posts
        return (<BlogError></BlogError>)
      }
      else if (!isLoaded)
      {
        return (<BlogLoading>Loading...</BlogLoading>)
      }
      else
      {
        return (
         <div>
           <BlogTitle>From the Blog</BlogTitle>
             {posts.map(post => (
                <BlogPost key={post.guid}>
                  <Container>
                  <BlogPostTitle>
                    {post.title}
                  </BlogPostTitle>
                    <p>{post.description}</p>
                    <Button
                      href={post.link}
                      color="#fcb132"
                      bg="white"
                      big
                      width={[1, 1 / 2, 1]}
                      fontSize={[3, 5]}
                      children={false}
                    >
                      <span>Read More</span>
                    </Button>
                  </Container>
                </BlogPost>
             ))}
          </div>
        );
      }  
    }
    return <Blog></Blog>;
  }
}
export default Blog