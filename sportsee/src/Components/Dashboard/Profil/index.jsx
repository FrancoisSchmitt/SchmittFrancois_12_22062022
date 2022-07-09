import './index.css';
import propTypes from 'prop-types';

function Profil(nextProps) {
      const { name } = nextProps;
      return (
            <section>
                  <div>
                        <h1>Bonjour</h1>
                        <span>{name}</span>
                  </div>
            </section>
      );
}

Profil.propTypes = {
      name: propTypes.string,
};
export default Profil;
