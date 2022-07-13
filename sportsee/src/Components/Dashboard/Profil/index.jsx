import './index.css';
import propTypes from 'prop-types';

function Profil(nextProps) {
      const  {test}  = nextProps;
      console.log(nextProps)
      return (
            <section>
                  <div>
                        <h1>Bonjour</h1>
                        <span name={test}></span>
                  </div>
            </section>
      );
}

Profil.propTypes = {
      name: propTypes.array,
};
export default Profil;
