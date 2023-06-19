import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const Footer = () => {
  return (
    <div>
        <p>Copyright &copy; 2021</p>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Footer