import Sportsman from '../../../Assets/Sportsman.svg';
import Logo from '../../../Assets/logo.svg';
import { NavLink } from 'react-router-dom';
import './index.css';

/**
 * 
 * @returns {JSX.Element}
 */

export default function Header() {
      return (
            <section className="header">
                  <div className="header-content">
                        <div className="header-content-image">
                              <img
                                    src={Sportsman}
                                    alt="img banner"
                                    className="header-image-logo"
                              />
                              <img
                                    src={Logo}
                                    alt="img banner"
                                    className="header-image-text"
                              />
                        </div>
                        <div className="header-content-link">
                              <NavLink
                                    to="/"
                                    className={(isActive) =>
                                          'nav-link-home Error-return-menu' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    Accueil
                              </NavLink>
                              <NavLink
                                    to="#"
                                    className={(isActive) =>
                                          'nav-link-home Error-return-menu' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    Profil
                              </NavLink>
                              <NavLink
                                    to="#"
                                    className={(isActive) =>
                                          'nav-link-home Error-return-menu' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    Réglage
                              </NavLink>
                              <NavLink
                                    to="#"
                                    className={(isActive) =>
                                          'nav-link-home Error-return-menu' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    Communauté
                              </NavLink>
                        </div>
                  </div>
            </section>
      );
}
