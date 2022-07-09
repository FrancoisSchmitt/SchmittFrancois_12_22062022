import './index.css';
import propTypes from 'prop-types';

export default function Performance({ img, data, dataType, className }) {
      return (
            <div className="performance-content">
                  <div className={'performance-image' + ' ' + className}>
                        <img className="image" src={img} alt={img} />
                  </div>
                  <div className="performance-data">
                        <p>{data}</p>
                        <p>{dataType}</p>
                  </div>
            </div>
      );
}

Performance.propTypes = {
      className: propTypes.string,
      img: propTypes.string,
      data: propTypes.string,
      dataType: propTypes.string,
};
