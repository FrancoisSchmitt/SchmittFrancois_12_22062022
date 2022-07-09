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

export default function Barchart(props) {
      const NewData = [
            {
                  name: '1',
                  dataKilogram: props?.data?.[0],
                  dataCalories: props?.data2?.[0],
            },
            {
                  name: '2',
                  dataKilogram: props?.data?.[1],
                  dataCalories: props?.data2?.[1],
            },
            {
                  name: '3',
                  dataKilogram: props?.data?.[2],
                  dataCalories: props?.data2?.[2],
            },
            {
                  name: '4',
                  dataKilogram: props?.data?.[3],
                  dataCalories: props?.data2?.[3],
            },
            {
                  name: '5',
                  dataKilogram: props?.data?.[4],
                  dataCalories: props?.data2?.[4],
            },
            {
                  name: '6',
                  dataKilogram: props?.data?.[5],
                  dataCalories: props?.data2?.[5],
            },
            {
                  name: '7',
                  dataKilogram: props?.data?.[6],
                  dataCalories: props?.data2?.[6],
            },
      ];

      return (
            <div className="barchart">
                  <Legend dataKey="dataKilogram" />
                  <ResponsiveContainer aspect={4}>
                        <BarChart
                              // width={850}
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
                              <XAxis dataKey="name" tickLine={false} />
                              <Tooltip fillOpacity={0.1} />

                              <Bar
                                    dataKey="dataKilogram"
                                    fill="#282D30"
                                    barSize={10}
                                    radius={[50, 50, 0, 0]}
                              />
                              <Bar
                                    dataKey="dataCalories"
                                    fill="#E60000"
                                    barSize={10}
                                    radius={[50, 50, 0, 0]}
                              />
                              <YAxis
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
      name: propTypes.array,
      data: propTypes.array,
      dataKilogram: propTypes.number,
      dataCalories: propTypes.number,
      data2: propTypes.array,
};
