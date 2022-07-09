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
                                    top: 5,
                                    right: 1,
                                    bottom: 5,
                                    left: 1,
                              }}
                              onMouseMove={(e) => {
                                    if (e.isTooltipActive === true) {
                                          let div =
                                                document.querySelector(
                                                      '.averageResponsive'
                                                );
                                          let windowWidth = div.clientWidth;
                                          let mouseXpercentage = Math.round(
                                                (e.activeCoordinate.x /
                                                      windowWidth) *
                                                      100
                                          );
                                          div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`;
                                    }
                              }}
                        >
                              <span>Durée moyenne des sessions</span>

                              <Tooltip cursor={{ stroke: 'none' }} />
                              <YAxis
                                    hide={true}
                                    domain={['dataMin -15', 'dataMax + 45']}
                              />
                              <XAxis
                                    tick={{
                                          fill: '#ffffff',
                                          opacity: 0.5,
                                    }}
                                    padding={{
                                          left: 4,
                                    }}
                                    tickLine={false}
                                    axisLine={false}
                                    dataKey="name"
                              />
                              <Line
                                    className="lineData"
                                    type="natural"
                                    dataKey="dataLenght"
                                    dot={false}
                                    stroke="#ffffff"
                                    strokeWidth={2}
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
