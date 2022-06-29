import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Profil from '../../Components/Dashboard/Profil';
import Linechart from '../../Components/Dashboard/Linechart';
import Radarchart from '../../Components/Dashboard/Radarchart';
import RadialBar from '../../Components/Dashboard/RadialBarChart';
import Barchart from '../../Components/Dashboard/Barchart';
import * as Call from '../../Services/call';
import './index.css';
// import { Navigate } from 'react-router-dom';

export default function Dashboard() {
      const { id } = useParams();

     
      // if (erreur === true) return <Navigate to="/404" />;

      return (
            <section className="home">
                  <Profil />
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
