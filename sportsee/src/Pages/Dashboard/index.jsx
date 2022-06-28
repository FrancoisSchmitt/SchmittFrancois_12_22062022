import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Profil from '../../Components/Dashboard/Profil';
import Linechart from '../../Components/Dashboard/Linechart';
import Radarchart from '../../Components/Dashboard/Radarchart';
import RadialBar from '../../Components/Dashboard/RadialBarChart';
import * as Utils from '../../Services/utils';
import { Navigate } from 'react-router-dom';

export default function Dashboard() {
      const { id } = useParams();
      const [erreur, setErreur] = useState(false);

      const [userInfos, setUserInfos] = useState({
            firstName: String,
      });

      useEffect(() => {
            Utils.utilsUserInfos(id).then((data) => {
                  if (data.erreur === 'erreur') {
                        setErreur(true);
                  }
                  setUserInfos(data);
                  console.log(setUserInfos(data));
            });
      }, [id]);

      // if (erreur === true) return <Navigate to="/404" />;

      return (
            <section>
                  <Profil test={userInfos?.firstName} />
                  <Radarchart />
                  <Linechart />
                  <RadialBar />
            </section>
      );
}
