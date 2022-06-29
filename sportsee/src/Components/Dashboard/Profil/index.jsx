import './index.css';
import propTypes from 'prop-types';


 function Profil(Props) {
      console.log(Props);
      return (
            <section>
                  <div>
                        <h1>Bonjour</h1>
                        <span firstname={Props.firstName}></span>
                  </div>
            </section>
      );
}

Profil.propTypes = {
      firstName: propTypes.string,
};
export default Profil;