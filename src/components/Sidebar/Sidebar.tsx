import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import avatar from "../../assets/images/avatar.jpg";
import MainMenu from "./MainMenu/MainMenu";

class Sidebar extends Component {

  public render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.sidebarTop}>

          <div className={styles.logo}>
            <div className={cn(styles.image, styles.avatar48)}>
              {/*<img src={avatar} alt=""/>*/}
            </div>
            <h1 id="title">Dad Undead</h1>
            <p>Frontend Developer</p>
          </div>

          <MainMenu/>

        </div>

        <div className={styles.sidebarBottom}>
          <ul className={styles.sidebarIcons}>
            <li>
              <a href="#" className={styles.sidebarIconLink} aria-label='github'>
                <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon}/>
              </a>
            </li>
            <li>
              <a href="#" className={styles.sidebarIconLink} aria-label='linkedin'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.icon}/>
              </a>
            </li>
            <li>
              <a href="#" className={styles.sidebarIconLink} aria-label='github'>
                <FontAwesomeIcon icon="envelope" className={styles.icon}/>
              </a>
            </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Sidebar;
