/* eslint-disable react/jsx-no-duplicate-props */
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import apple from '../../Assets/apple.svg';
import feu from '../../Assets/feu.svg';
import Proteine from '../../Assets/Proteine.svg';
import cheeseburger from '../../Assets/cheeseburger.svg';

import Performance from '../../Components/Dashboard/Performance';
import Profil from '../../Components/Dashboard/Profil';
import Linechart from '../../Components/Dashboard/Linechart';
import Radarchart from '../../Components/Dashboard/Radarchart';
import RadialBar from '../../Components/Dashboard/RadialBarChart';
import Barchart from '../../Components/Dashboard/Barchart';

import {
      getMainInformation,
      getActivity,
      getAverage,
      getPerformance,
} from '../../Services/call';

import './index.css';

/**
 * @function Dashboard
 * @returns Dashboard with api using get.axios
 */

export default function Dashboard() {
      const { id } = useParams();

      const [mainData, setMainData] = useState([]);
      const [activityData, setActivityData] = useState([]);
      const [averageData, setAverageData] = useState([]);
      const [performanceData, setPerformanceData] = useState([]);

      useEffect(() => {
            (async () => {
                  let result = getMainInformation(id);
                  // console.log(await result);
                  setMainData(await result);

                  let resultOfActivity = getActivity(id);
                  setActivityData(await resultOfActivity);

                  let resultOfAverage = getAverage(id);
                  setAverageData(await resultOfAverage);

                  let resultOfPerformance = getPerformance(id);
                  setPerformanceData(await resultOfPerformance);
            })();
      }, [id]);

      const activity = activityData?.sessions;
      const average = averageData?.sessions;
      // console.log(activity);
      // console.log(performanceData);
      return (
            <section className="home">
                  {/* <Profil name={mainData?.userInfos?.firstName} /> */}

                  <section className="content-profil">
                        <h1>
                              Bonjour{' '}
                              <span>{mainData?.userInfos?.firstName}</span>
                        </h1>
                        <p>
                              Félicitation ! Vous avez explosé vos objectifs
                              hier 👏
                        </p>
                  </section>
                  <section className="barchart-section">
                        <Barchart
                              data={activity?.map((person) => person.kilogram)}
                              data2={activity?.map((person) => person.calories)}
                              name={activity?.map((person) => person.day)}
                        />
                  </section>

                  <section className="chart">
                        <Linechart
                              data={average?.map(
                                    (personSessions) =>
                                          personSessions.sessionLength
                              )}
                        />

                        {performanceData.length > 0 ? (
                              <Radarchart
                                    value={performanceData?.map(
                                          (personPerf) => personPerf.value
                                    )}
                                    name={performanceData?.map(
                                          (personPerfs) => personPerfs.kind
                                    )}
                              />
                        ) : (
                              <> </>
                        )}
                        <RadialBar
                              data={mainData?.score || mainData?.todayScore}
                        />
                  </section>
                  <section className="performance">
                        <Performance
                              className="calories"
                              img={feu}
                              data={mainData?.keyData?.calorieCount + 'KCal'}
                              dataType="Calories"
                        />
                        <Performance
                              className="proteins"
                              img={Proteine}
                              data={mainData?.keyData?.proteinCount + 'g'}
                              dataType="Protéines"
                        />
                        <Performance
                              className="glucides"
                              img={apple}
                              data={mainData?.keyData?.carbohydrateCount + 'g'}
                              dataType="Glucides"
                        />
                        <Performance
                              className="lipides"
                              img={cheeseburger}
                              data={mainData?.keyData?.lipidCount + 'g'}
                              dataType="Lipides"
                        />
                  </section>
            </section>
      );
}
