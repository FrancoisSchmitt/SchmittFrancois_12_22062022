import {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      ResponsiveContainer,
} from 'recharts';
import './index.css';
import propTypes from 'prop-types';

/**
 * 
 * @param {*} props 
 * @returns {JSX.Element}
 * @const NewData = data?.[number]
 * @const CustomTooltip is equal to the display of tooltip
 * @const CustomLegend is equal to the display of Legend
 */



export default function Barchart(props) {
      const NewData = [
            {
                  name: '1',
                  Poids: props?.data?.[0],
                  Calories: props?.data2?.[0],
            },
            {
                  name: '2',
                  Poids: props?.data?.[1],
                  Calories: props?.data2?.[1],
            },
            {
                  name: '3',
                  Poids: props?.data?.[2],
                  Calories: props?.data2?.[2],
            },
            {
                  name: '4',
                  Poids: props?.data?.[3],
                  Calories: props?.data2?.[3],
            },
            {
                  name: '5',
                  Poids: props?.data?.[4],
                  Calories: props?.data2?.[4],
            },
            {
                  name: '6',
                  Poids: props?.data?.[5],
                  Calories: props?.data2?.[5],
            },
            {
                  name: '7',
                  Poids: props?.data?.[6],
                  Calories: props?.data2?.[6],
            },
      ];

      const CustomTooltip = ({ active, payload }) => {
            if (active && payload && payload.length) {
                  return (
                        <div className="custom-tooltip">
                              <p className="tooltip-content">{`${payload[0]?.value}kg`}</p>
                              <p className="tooltip-content">{`${payload[1]?.value}Kcal`}</p>
                        </div>
                  );
            }
      };

      const CustomLegend = ({ payload }) => {
            if (payload) {
                  return (
                        <div className="custom-legend">
                              <div className="legend-title">
                                    <h3>Activité quotidienne</h3>
                              </div>
                              <div className="legend-content">
                                    <div className="color-kg"></div>
                                    <p className="legend-Kg">{`${payload[0]?.value} (kg)`}</p>
                              </div>
                              <div className="legend-content">
                                    <div className="color-Kcal"></div>
                                    <p className="legend-Kcal">{`${payload[1]?.value}  brûlées (Kcal)`}</p>
                              </div>
                        </div>
                  );
            }
      };

      return (
            <div className="barchart">
                  <Legend dataKey="Poids" />
                  <ResponsiveContainer aspect={4}>
                        <BarChart
                              height={300}
                              data={NewData}
                              margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                              }}
                        >
                              <CartesianGrid strokeDasharray="3" />
                              <XAxis
                                    padding={{ left: -48, right: -48 }}
                                    dataKey="name"
                                    tickLine={false}
                              />
                              <Tooltip
                                    content={<CustomTooltip />}
                                    fillOpacity={0.1}
                                    position={{ y: 100 }}
                                    wrapperStyle={{ top: -100, left: 50 }}
                              />
                              <Legend
                                    content={<CustomLegend />}
                                    height={35}
                                    verticalAlign="top"
                              />
                              <Bar
                                    dataKey="Poids"
                                    fill="#282D30"
                                    barSize={10}
                                    radius={[50, 50, 0, 0]}
                              />
                              <Bar
                                    dataKey="Calories"
                                    fill="#E60000"
                                    barSize={10}
                                    radius={[50, 50, 0, 0]}
                              />
                              <YAxis
                                    tick={{ dx: 45 }}
                                    orientation={'right'}
                                    tickCount={3}
                                    axisLine={false}
                                    tickLine={false}
                              />
                        </BarChart>
                  </ResponsiveContainer>
            </div>
      );
}

Barchart.propTypes = {
      Poids: propTypes.number,
      Calories: propTypes.number,
};
