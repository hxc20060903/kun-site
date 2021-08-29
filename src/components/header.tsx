import React from 'react';
import {
  siteTitle,
  navLinks,
  navLinkItem,
  navLinkText,
} from './header.module.css';
import { Link } from 'gatsby';

export const Header = ({ title }: { title: string }): JSX.Element => {
  return (
    <header>
      <div className={siteTitle}>{title}</div>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
