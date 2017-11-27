import React from 'react';
import TextBox from 'components/ui/TextBox';
import { Jumbotron, Button } from 'react-bootstrap';
import createHistory from 'history/createBrowserHistory';

const AboutPage = () => (
  <Jumbotron>
    <div style={{textAlign: 'center'}}>
      <TextBox>
        Sorry this page cannot tell you anything about this blog...
      </TextBox>
    </div>
    <div style={{textAlign: 'center'}}>
      <Button onClick={() => createHistory().goBack()}>
        Get me out of here!
      </Button>
    </div>
  </Jumbotron>
);

export default AboutPage;
