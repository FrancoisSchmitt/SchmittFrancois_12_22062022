import './index.css';
import {
      LineChart,
      Line,
      XAxis,
      YAxis,
      Tooltip,
      ResponsiveContainer,
} from 'recharts';
import propTypes from 'prop-types';

export default function Linechart(props) {
      const data = [
            { name: 'L', dataLenght: props?.data?.[0] },
            { name: 'M', dataLenght: props?.data?.[1] },
            { name: 'M', dataLenght: props?.data?.[2] },
            { name: 'J', dataLenght: props?.data?.[3] },
            { name: 'V', dataLenght: props?.data?.[4] },
            { name: 'S', dataLenght: props?.data?.[5] },
            { name: 'D', dataLenght: props?.data?.[6] },
      ];

      const CustomTooltip = ({ active, payload }) => {
            if (active && payload && payload.length) {
                  return (
                        <div className="custom-tooltip-linechart">
                              <p className="tooltip-content-linechart">{`${payload[0].value} min`}</p>
                        </div>
                  );
            }
      };

      return (
            <div className="Linechart">
                  <h2 className="type-stats-linechart">
                        Durée moyenne des sessions
                  </h2>
                  <ResponsiveContainer
                        aspect={1.2}
                        className="averageResponsive"
                  >
                        <LineChart
                              outerRadius="58%"
                              width={258}
                              height={263}
                              data={data}
                              margin={{
                                    top: 15,
                                    right: 0,
                                    bottom: 0,
                                    left: 0,
                              }}
                              onMouseMove={(e) => {
                                    let averageResponsive =
                                          document.querySelector(
                                                '.averageResponsive'
                                          );
                                    if (e.isTooltipActive === true) {
                                          let backgroundTool =
                                                averageResponsive.clientWidth;
                                          let mouseX = Math.round(
                                                (e.activeCoordinate.x /
                                                      backgroundTool) *
                                                      100
                                          );
                                          averageResponsive.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseX}%, rgba(175,0,0,1.5) ${mouseX}%, rgba(175,0,0,1.5) 100%)`;
                                    }
                              }}
                              onMouseOut={() => {
                                    let averageResponsive =
                                          document.querySelector(
                                                '.averageResponsive'
                                          );
                                    averageResponsive.style.background = `none`;
                              }}
                        >
                              <span>Durée moyenne des sessions</span>

                              <Tooltip
                                    content={<CustomTooltip />}
                                    cursor={{ stroke: 'none' }}
                                    position={{ y: 100 }}
                                    wrapperStyle={{ top: -40, left: 10 }}
                              />
                              <YAxis
                                    hide={true}
                                    domain={['dataMin -15', 'dataMax + 45']}
                              />

                              <Line
                                    className="lineData"
                                    type="natural"
                                    dataKey="dataLenght"
                                    dot={false}
                                    stroke="#ffffff"
                                    strokeWidth={2}
                              />
                              <XAxis
                                    // dx={-25}
                                    dy={12}
                                    tick={{
                                          fill: '#ffffff',
                                          opacity: 0.5,
                                    }}
                                    padding={{
                                          left: 10,
                                          right: 10,
                                          top: 10,
                                    }}
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    dataKey="name"
                              />
                        </LineChart>
                  </ResponsiveContainer>
            </div>
      );
}

Linechart.propTypes = {
      dataLenght: propTypes.number,
      name: propTypes.string,
};
