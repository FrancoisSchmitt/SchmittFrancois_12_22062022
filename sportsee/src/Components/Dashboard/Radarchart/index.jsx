import './index.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import propTypes from 'prop-types';

export default function Radarchart(props) {
      const data = [
            {
                  subject: props?.name[0],
                  valueOfName: props?.value?.[0],
                  fullMark: 300,
            },
            {
                  subject: props?.name[1],
                  valueOfName: props?.value?.[1],
                  fullMark: 300,
            },
            {
                  subject: props?.name[2],
                  valueOfName: props?.value?.[2],
                  fullMark: 300,
            },
            {
                  subject: props?.name[3],
                  valueOfName: props?.value?.[3],
                  fullMark: 300,
            },
            {
                  subject: props?.name[4],
                  valueOfName: props?.value?.[4],
                  fullMark: 300,
            },
            {
                  subject: props?.name[5],
                  valueOfName: props?.value?.[5],
                  fullMark: 300,
            },
      ];
      return (
            <div className="radar-chart">
                  <div>
                        <RadarChart
                              cx="50%"
                              cy="50%"
                              outerRadius="58%"
                              data={data}
                              width={258}
                              height={263}
                        >
                              <PolarGrid stroke="white" radialLines={false} />
                              <PolarAngleAxis
                                    dataKey="subject"
                                    fontSize={12}
                                    stroke="white"
                                    tickLine={false}
                              />
                              <Radar
                                    name="Mike"
                                    dataKey="valueOfName"
                                    stroke="#FF0101"
                                    fill="#FF0101"
                                    fillOpacity={0.7}
                                    height={150}
                                    width={150}
                              />
                        </RadarChart>
                  </div>
            </div>
      );
}

Radarchart.propTypes = {
      subject: propTypes.string,
      valueOfName: propTypes.number,
};
