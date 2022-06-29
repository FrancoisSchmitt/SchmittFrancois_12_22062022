import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Profil from '../../Components/Dashboard/Profil';
import Linechart from '../../Components/Dashboard/Linechart';
import Radarchart from '../../Components/Dashboard/Radarchart';
import RadialBar from '../../Components/Dashboard/RadialBarChart';
import Barchart from '../../Components/Dashboard/Barchart';
import {getMainInformation} from '../../Services/call';
import './index.css';
// import PropTypes from 'prop-types';




export default function Dashboard() {
      const { id } = useParams();
      
      const [mainData, setMainData] = useState(null)
      // const [error, setError] = useState(false)
      
      useEffect(()=>{
            (async ()=>{
             let result = getMainInformation() 
              setMainData(await result) 
            })()
      },[])
      
 if (mainData === null) return (<h1>loading</h1>);
      

return (
            <section className="home">
                  <Profil firstname={mainData.userInfos.firstName} />

                  {/* <h1>Bonjour  <span>{mainData.userInfos.firstName}</span></h1> */}
                  <section className="barchart-section">
                        <Barchart />
                  </section>
                  <section className="chart">
                        <Linechart />
                        <Radarchart />
                        <RadialBar />
                  </section>
            </section>
      );
}

