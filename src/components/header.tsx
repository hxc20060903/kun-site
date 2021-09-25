import React from 'react';
import {
  block,
  siteTitle,
  siteNav,
  navLinks,
  navLinkItem,
  navLinkText,
} from './header.module.css';
import { Link } from 'gatsby';

export const Header = ({ title }: { title: string }): JSX.Element => {
  return (
    <header className={block}>
      <span className={siteTitle}>{title}</span>
      <nav className={siteNav}>
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
        </ul>
      </nav>
    </header>
  );
};
