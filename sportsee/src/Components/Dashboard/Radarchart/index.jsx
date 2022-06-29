import './index.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';

const data = [
      {
            subject: 'Intensité',
            A: 120,
            fullMark: 150,
      },
      {
            subject: 'Vitesse',
            A: 98,
            fullMark: 150,
      },
      {
            subject: 'Force',
            A: 86,
            fullMark: 150,
      },
      {
            subject: 'Endurance',
            A: 99,
            fullMark: 150,
      },
      {
            subject: 'Energie',
            A: 85,
            fullMark: 150,
      },
      {
            subject: 'Cardio',
            A: 65,
            fullMark: 150,
      },
];
export default function Radarchart() {
      return (
            <div className="radar-chart">
                  <div>
                        <RadarChart
                              cx="50%"
                              cy="50%"
                              outerRadius="80%"
                              data={data}
                              width={600}
                              height={300}
                        >
                              <PolarGrid stroke="white" />
                              <PolarAngleAxis
                                    dataKey="subject"
                                    stroke="white"
                              />
                              <Radar
                                    name="Mike"
                                    dataKey="A"
                                    stroke="#FF0101"
                                    fill="#FF0101"
                                    fillOpacity={0.7}
                              />
                        </RadarChart>
                  </div>
            </div>
      );
}
