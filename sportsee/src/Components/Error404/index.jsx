import { NavLink } from 'react-router-dom';
import './index.css'

/**
 * @function Error Components: return pages error
 * @returns Error 404 / files not found and redirect to "./"
 */

export default function Error() {
      return (
            <section className="error">
                  <div className="error-content">
                        <h2 className="error-404-information">
                              La page demandez n'existe pas.
                        </h2>
                  </div>
                  <NavLink
                        to="/"
                        className={(isActive) =>
                              'nav-link-home Error-return-menu' +
                              (!isActive ? ' unselected' : '')
                        }
                  >
                        Retourner sur la page d'acceuil
                  </NavLink>
            </section>
      );
}
