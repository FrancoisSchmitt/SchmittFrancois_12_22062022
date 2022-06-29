import { RadialBarChart, RadialBar } from 'recharts';
import './index.css';
const data = [
      {
            fill: '#FF0000',
            value: 33,
      },
      {
            fill: 'transparent',
            value: 100,
      },
];

export default function Radialbarchart() {
      return (
            <div className="score-radial">
                  <span className="type-stats">Score</span>
                  <div className="score-graphique">
                        <RadialBarChart
                              barSize={15}
                              data={data}
                              innerRadius="100%"
                              startAngle={90}
                              endAngle={450}
                              width={300}
                              height={300}
                        >
                              <RadialBar dataKey="value" />
                        </RadialBarChart>
                        <div className="score-pourcentage">
                              <span className="score-finally">12%</span>
                              <span>de votre objectif</span>
                        </div>
                  </div>
            </div>
      );
}
