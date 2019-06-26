import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => (
  <div className="header">
    Hello Header <Link to="/">Top</Link>
  </div>
);

export default Header;