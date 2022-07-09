import { RadialBarChart, RadialBar } from 'recharts';
import './index.css';

import propTypes from 'prop-types';

export default function Radialbarchart(props) {
      const data = {
            fill: 'transparent',
            value: 100,
      };

      const NewData = {
            value: props.data * 100,
            fill: '#FF0000',
      };

      return (
            <div className="score-radial">
                  <h2 className="type-stats">Score</h2>
                  <div className="score-graphique">
                        <RadialBarChart
                              barSize={15}
                              data={[data, NewData]}
                              innerRadius="100%"
                              startAngle={90}
                              endAngle={450}
                              width={258}
                              height={263}
                        >
                              <RadialBar dataKey="value" cornerRadius={10} />
                        </RadialBarChart>
                        <div className="score-pourcentage">
                              <span className="score-finally">
                                    {NewData.value}%
                              </span>
                              <span>de votre objectif</span>
                        </div>
                  </div>
            </div>
      );
}

Radialbarchart.propTypes = {
      data: propTypes.number,
      value: propTypes.number,
};
