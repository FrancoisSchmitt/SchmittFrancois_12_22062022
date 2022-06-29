import './index.css';
import {
      LineChart,
      Line,
      CartesianGrid,
      XAxis,
      YAxis,
      Tooltip,
} from 'recharts';
const data = [
      { name: 'L', uv: 0, pv: 2400, amt: 2400 },
      { name: 'M', uv: 100, pv: 200, amt: 400 },
      { name: 'M', uv: 300, pv: 200, amt: 400 },
      { name: 'J', uv: 150, pv: 200, amt: 400 },
      { name: 'V', uv: 400, pv: 200, amt: 400 },
      { name: 'S', uv: 600, pv: 1500, amt: 5400 },
      { name: 'D', uv: 800, pv: 900, amt: 5400 },
];

//   .then((actualData) => console.log(actualData));

export default function Linechart() {
      return (
            <div className="Linechart">
                  <div>
                        <span className="type-stats-linechart">
                              Durée moyenne des sessions
                        </span>

                        <LineChart
                              width={300}
                              height={300}
                              data={data}
                              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                              <span>Durée moyenne des sessions</span>
                              <Line
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="blue"
                              />
                              <XAxis dataKey="name" />
                              <Tooltip />
                        </LineChart>
                  </div>
            </div>
      );
}
