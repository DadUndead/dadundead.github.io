import React, { Component } from 'react';
import cn from 'classnames';
import styles from './Main.module.css';
import { NavHashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles from 'react-particles-js';
import { PARTICLES_CONFIG } from "../Sidebar/MainMenu/particles";

class Main extends Component {

  public render() {
    return (
      <div className={styles.main}>

        <section id="top" className={cn(styles.one, styles.dark, styles.cover)}>
          <div className="container">

            <Particles canvasClassName={styles.particles} params={PARTICLES_CONFIG}/>
            <header><h2 className="alt">Welcome, stranger!</h2></header>
            <p>
              Sorry, this site is under construction, try to visit it later.
            </p>
            <footer>
              <Link
                to='#portfolio'
                smooth={true}
                className={styles.welcomeButton}
              >
                <FontAwesomeIcon
                  className={styles.welcomeButtonIcon}
                  icon={'angle-double-down'}
                  size={'2x'}
                />
              </Link>
            </footer>
          </div>
        </section>

        <section id="portfolio" className={styles.two}>
          <div className="container">
            <header><h2>Portfolio</h2></header>
            <p>Under Construction.</p>
            <div className="row">


            </div>
          </div>
        </section>

        <section id="about" className={styles.three}>
          <div className="container">
            <header><h2>About Me</h2></header>
            <a href="#" className="image featured">
              <img src="images/pic08.jpg" alt=""/>
            </a>
            <p>Under Construction.</p>
          </div>
        </section>

        <section id="contact" className={styles.four}>
          <div className="container">
            <header><h2>Contact</h2></header>
            <p>Under Construction.</p>

            <form className={styles.contactForm} method="post" action="#">
              <div className={''}>
                <div className={styles.contactFormTop}>

                  <div className={styles.contactFormName}>
                    <input type="text" name="name" placeholder="Name"/>
                  </div>

                  <div className={styles.contactFormEmail}>
                    <input type="text" name="email" placeholder="Email"/>
                  </div>

                </div>

                <div className={styles.messageWrapper}>
                  <textarea name="message" placeholder="Message"/>
                </div>

                <div className={styles.submitBtnWrapper}>
                  <input type="submit" value="Send Message"/>
                </div>
              </div>
            </form>

          </div>
        </section>

        <div className={styles.footer}>
          <div className={styles.copyright}>
            © aklimenko-2019. All rights reserved.
          </div>
        </div>

      </div>
    );
  }
}

export default Main;
