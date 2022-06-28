import { NavLink } from 'react-router-dom';

/**
 * Error Components: return pages error
 * @returns Error 404 / files not found
 */

export default function Error() {
      return (
            <section className="error">
                  <div className="error-content">
                        <h1 className="error-404">404</h1>
                        <h2 className="error-404-information">
                              Oups! La page demandez n'existe pas.
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
