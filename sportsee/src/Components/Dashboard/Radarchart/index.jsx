import {
      Radar,
      RadarChart,
      PolarGrid,
      PolarAngleAxis,
      PolarRadiusAxis,
      ResponsiveContainer,
} from 'recharts';
import './index.css';
const data = [
      {
            subject: 'Math',
            A: 120,
            B: 110,
            fullMark: 150,
      },
      {
            subject: 'Chinese',
            A: 98,
            B: 130,
            fullMark: 150,
      },
      {
            subject: 'English',
            A: 86,
            B: 130,
            fullMark: 150,
      },
      {
            subject: 'Geography',
            A: 99,
            B: 100,
            fullMark: 150,
      },
      {
            subject: 'Physics',
            A: 85,
            B: 90,
            fullMark: 150,
      },
      {
            subject: 'History',
            A: 65,
            B: 85,
            fullMark: 150,
      },
];
export default function Radarchart() {
      return (
            <section className="radarchart">
                  <div>
                        <ResponsiveContainer width="100%" height="100%">
                              <RadarChart
                                    cx="50%"
                                    cy="50%"
                                    outerRadius="80%"
                                    data={data}
                              >
                                    <PolarGrid />
                                    <PolarAngleAxis dataKey="subject" />
                                    <PolarRadiusAxis />
                                    <Radar
                                          name="Mike"
                                          dataKey="A"
                                          stroke="#020202"
                                          fill="#8884d8"
                                          //   fillOpacity={0.6}
                                    />
                              </RadarChart>
                        </ResponsiveContainer>
                  </div>
            </section>
      );
}
