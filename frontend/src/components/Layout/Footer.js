import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div className="copyright footer text-center">
      &copy; Company - {yearNow}
    </div>
  );
};

export default Footer;
