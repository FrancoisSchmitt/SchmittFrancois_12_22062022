import yoga from '../../../Assets/yoga.svg';
import Swimmer from '../../../Assets/Swimmer.svg';
import bike from '../../../Assets/bike.svg';
import alters from '../../../Assets/alters.svg';
import { NavLink } from 'react-router-dom';
import './index.css';

/**
 * Nav Components - Layout
 * @returns construction of the left navigation
 * @NavLinks Links that lead nowhere for moment
 */

export default function Nav() {
      return (
            <div className="container">
                  <div className="side-nav">
                        <ul className="nav-menu">
                              <NavLink
                                    to="/"
                                    className={(isActive) =>
                                          'navigation-link' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    <li className="nav-content">
                                          <img
                                                src={yoga}
                                                alt="img banner"
                                                className="lol"
                                          />
                                    </li>
                              </NavLink>

                              <NavLink
                                    to="/"
                                    className={(isActive) =>
                                          'navigation-link' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    <li className="nav-content">
                                          <img
                                                src={Swimmer}
                                                alt="img banner"
                                                className="lol"
                                          />
                                    </li>
                              </NavLink>

                              <NavLink
                                    to="/"
                                    className={(isActive) =>
                                          'navigation-link' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    <li className="nav-content">
                                          <img
                                                src={bike}
                                                alt="img banner"
                                                className="lol"
                                          />
                                    </li>
                              </NavLink>

                              <NavLink
                                    to="/"
                                    className={(isActive) =>
                                          'navigation-link' +
                                          (!isActive ? ' unselected' : '')
                                    }
                              >
                                    <li className="nav-content">
                                          <img
                                                src={alters}
                                                alt="img banner"
                                                className="lol"
                                          />
                                    </li>
                              </NavLink>
                        </ul>
                        <div className="lol1">
                              <p className="test">Copiryght, SportSee 2020</p>
                        </div>
                  </div>
            </div>
      );
}
