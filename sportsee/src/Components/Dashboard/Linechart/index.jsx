import {
      LineChart,
      Line,
      CartesianGrid,
      XAxis,
      YAxis,
      Tooltip,
} from 'recharts';
const data = [
      { name: 'Page A', uv: 0, pv: 2400, amt: 2400 },
      { name: 'Page B', uv: 100, pv: 200, amt: 400 },
      { name: 'Page B', uv: 300, pv: 200, amt: 400 },
      { name: 'Page c', uv: 150, pv: 200, amt: 400 },
      { name: 'Page E', uv: 400, pv: 200, amt: 400 },
      { name: 'Page B', uv: 500, pv: 1200, amt: 5400 },
];

//   .then((actualData) => console.log(actualData));

export default function Linechart() {
      return (
            <section>
                  <div>
                        <LineChart
                              width={600}
                              height={300}
                              data={data}
                              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                              <Line
                                    type="monotone"
                                    dataKey="uv"
                                    stroke="blue"
                              />
                              <CartesianGrid
                                    stroke="#ccc"
                                    strokeDasharray="5 5"
                              />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                        </LineChart>
                  </div>
            </section>
      );
}
