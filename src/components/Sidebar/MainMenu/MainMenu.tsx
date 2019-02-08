import React, { Component } from 'react';
import cn from 'classnames';
import styles from './MainMenu.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { NavHashLink as Link } from 'react-router-hash-link';
import { RouteComponentProps, withRouter } from "react-router";

const MENU: Array<{ href: string, id: string, label: string, icon: IconProp }> = [
  {
    href: '#top',
    id: 'top-link',
    label: 'Intro',
    icon: 'home'
  },
  {
    href: '#portfolio',
    id: 'portfolio-link',
    label: 'Portfolio',
    icon: 'th'
  },
  {
    href: '#about',
    id: 'about-link',
    label: 'About Me',
    icon: 'user'
  },
  {
    href: '#contact',
    id: 'contact-link',
    label: 'Contact',
    icon: 'envelope'
  }
];

class MainMenu extends Component<RouteComponentProps> {

  public render() {
    return (
      <nav className={styles.nav}>
        <ul>
          {
            MENU.map(((menuItem, i) => (
              <li key={'main-menu-item-' + i}>
                <Link
                  to={menuItem.href}
                  smooth={true}
                  className={cn({ [styles.navLinkActive]: this.props.location.hash === menuItem.href })}
                >
                  <span className={styles.navLinkText}>{menuItem.label}</span>
                  <FontAwesomeIcon
                    className={styles.navLinkIcon}
                    icon={menuItem.icon}
                    size={'sm'}
                  />
                </Link>
              </li>
            )))
          }
        </ul>
      </nav>
    );
  }
}

export default withRouter(MainMenu);
