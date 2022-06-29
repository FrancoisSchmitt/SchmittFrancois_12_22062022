import './index.css';
import PropTypes from 'prop-types';

//   .then((actualData) => console.log(actualData));

export default function Profil(username) {
      return (
            <section>
                  <div>
                        <h1>Bonjour</h1>
                        {/* <span>{username}</span> */}
                  </div>
            </section>
      );
}

Profil.propTypes = {
      firstName: PropTypes.string,
};
