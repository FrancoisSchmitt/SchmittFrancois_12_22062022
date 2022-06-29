import './index.css';
import { NavLink } from 'react-router-dom';

export default function Accueil() {
      return (
            <div className="Choice-profil">
                  <NavLink className="lien-accueil" to={'/dashboard/12'}>
                        <button className="btn-accueil">
                              Profil n°12
                        </button>
                  </NavLink>
                  <NavLink className="lien-accueil" to={'/dashboard/18'}>
                        <button className="btn-accueil">
                              Profil n°18 
                        </button>
                  </NavLink>
            </div>
      );
}
