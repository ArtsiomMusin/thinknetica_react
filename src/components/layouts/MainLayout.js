import React from 'react';
import PropTypes from 'prop-types';

import { PageHeader, Well } from 'react-bootstrap';
import Link from 'components/elements/Link';

const MainLayout = ({children}) => (
  <div class="container">
    <Logo />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <PageHeader>
    <Link to='/'>Thinknetica Blog by Artem</Link>
  </PageHeader>
);

const Footer = () => (
  <Well>
    Powered by Me 8-)
  </Well>
);
