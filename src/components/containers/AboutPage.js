import React from 'react';
import TextBox from 'components/ui/TextBox';
import { PanelGroup, Button } from 'react-bootstrap';
import history from 'components/helpers/history';

const AboutPage = () => (
  <PanelGroup>
    <div style={{textAlign: 'center'}}>
      <TextBox>
        Sorry this page cannot tell you anything about this blog...
      </TextBox>
    </div>
    <div style={{textAlign: 'center'}}>
      <Button onClick={() => history.goBack()}>Get me out of here!</Button>
    </div>
  </PanelGroup>
);

export default AboutPage;
