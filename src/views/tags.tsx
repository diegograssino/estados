import React from 'react';
import GlobalStyle, {
  Container,
  Column,
  Row,
  Spacer
} from '../shared/styles/global';

const Tags = () => {
  return (
    <>
      <GlobalStyle />
      <h1>HTML Tags</h1>
      <h1>h1</h1>
      <h2>h2</h2>
      <h3>h3</h3>
      <h4>h4</h4>
      <p>p</p>
      <b>b</b>
      <em>em</em>
      <ul>
        <li>li</li>
        <li>li</li>
      </ul>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        a
      </a>
      <button>button</button>
      <h1>HTML Tags inside a Container</h1>
      <Container>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <p>p</p>
        <b>b</b>
        <em>em</em>
        <ul>
          <li>li</li>
          <li>li</li>
        </ul>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          a
        </a>
        <button>button</button>
      </Container>
      <h1>HTML Tags inside a Column</h1>
      <Column>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <p>p</p>
        <b>b</b>
        <em>em</em>
        <ul>
          <li>li</li>
          <li>li</li>
        </ul>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          a
        </a>
        <button>button</button>
      </Column>
      <h1>HTML Tags inside a Row with a Spacer in the middle</h1>
      <Row>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <Spacer></Spacer>
        <h4>h4</h4>
        <p>p</p>
        <b>b</b>
        <em>em</em>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          a
        </a>
        <button>button</button>
      </Row>
    </>
  );
};

export default Tags;
