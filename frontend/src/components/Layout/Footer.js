import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <div className="copyright footer text-center">
      &copy; Company - {yearNow}
    </div>
  );
};

export default Footer;
