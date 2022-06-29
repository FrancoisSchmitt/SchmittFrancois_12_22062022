import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './index.css';
const data = [
      {
            name: '1',
            uv: 4000,
            pv: 2400,
            amt: 2400,
      },
      {
            name: '2',
            uv: 3000,
            pv: 1398,
            amt: 2210,
      },
      {
            name: '3',
            uv: 2000,
            pv: 9800,
            amt: 2290,
      },
      {
            name: '4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
      },
      {
            name: '5',
            uv: 1890,
            pv: 4800,
            amt: 2181,
      },
      {
            name: '6',
            uv: 2390,
            pv: 3800,
            amt: 2500,
      },
      {
            name: '7',
            uv: 3490,
            pv: 4300,
            amt: 2100,
      },
      {
            name: '8',
            uv: 1890,
            pv: 4800,
            amt: 2181,
      },
      {
            name: '9',
            uv: 2390,
            pv: 3800,
            amt: 2500,
      },
      {
            name: '10',
            uv: 3490,
            pv: 4300,
            amt: 2100,
      },
];
export default function Barchart() {
      return (
            <div className="barchart">
                  <BarChart
                        width={965}
                        height={320}
                        data={data}
                        margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 5,
                        }}
                  >
                        <CartesianGrid strokeDasharray="3" />
                        <XAxis dataKey="name" />
                        <Tooltip fillOpacity={0.1} />

                        <Bar
                              dataKey="pv"
                              fill="#282D30"
                              barSize={10}
                              radius={10}
                        />
                        <Bar
                              dataKey="uv"
                              fill="#E60000"
                              barSize={10}
                              radius={10}
                        />
                        <YAxis orientation={'right'} />
                  </BarChart>
            </div>
      );
}