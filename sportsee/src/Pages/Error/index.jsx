import Error404 from '../../Components/Error404';
import { NavLink } from 'react-router-dom';

function Error() {
      return (
            <div className="Choice-profil">
                  <Error404 />
                  <NavLink className="lien-accueil" to={'/'}>
                        <button className="btn-accueil">Retourner à la page d'accueil</button>
                  </NavLink>
                 
            </div>
      );
}

export default Error;
