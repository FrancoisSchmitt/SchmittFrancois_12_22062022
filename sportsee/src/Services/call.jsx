import axios from 'axios';
import {
      USER_ACTIVITY,
      USER_MAIN_DATA,
      USER_AVERAGE_SESSIONS,
      USER_PERFORMANCE,
} from '../Mock/data';

/**
 * @var translate api english to french
 */

const mock = true;

const translate = {
      energy: 'Energie',
      strength: 'Force',
      cardio: 'Cardio',
      endurance: 'Endurance',
      speed: 'Vitesse',
      intensity: 'Intensité',
};

function IDMock(id) {
      let positionID = 0;
      switch (id) {
            case '12':
                  positionID = 0;
                  break;
            case '18':
                  positionID = 1;
                  break;
            default:
                  break;
      }
      return positionID;
}
/**
 * @function getMainInformation
 * @param {*} id
 * @returns data of main information
 */

async function getMainInformation(id) {
      try {
            if (mock) {
                  const positionArray = IDMock(id);

                  // console.log(mock);
                  // console.log(USER_MAIN_DATA);
                  const test = USER_MAIN_DATA[positionArray];
                  return test;
            }
            let res = await axios.get('http://localhost:3000/user' + `/${id}`);

            let data = res.data.data;
            // console.log(data);
            return data;
      } catch (error) {
            alert('getMainInformation : ' + error);
      }
}

/**
 * @function getActivity
 * @param {*} id
 * @returns data of activity users
 */

async function getActivity(id) {
      try {
            if (mock) {
                  const positionArray = IDMock(id);

                  // console.log(mock);
                  // console.log(USER_ACTIVITY);
                  const test = USER_ACTIVITY[positionArray];
                  return test;
            }
            let res = await axios.get(
                  'http://localhost:3000/user' + `/${id}/activity`
            );

            let data = res.data.data;
            // console.log(data);
            return data;
      } catch (error) {
            alert('getMainInformation : ' + error);
      }
}

/**
 * @function getAverage
 * @param {*} id
 * @returns data of average-sessions users
 */

async function getAverage(id) {
      try {
            if (mock) {
                  const positionArray = IDMock(id);

                  // console.log(mock);
                  // console.log(USER_AVERAGE_SESSIONS);
                  const test = USER_AVERAGE_SESSIONS[positionArray];
                  return test;
            }
            let res = await axios.get(
                  'http://localhost:3000/user' + `/${id}/average-sessions`
            );

            let data = res.data.data;
            // console.log(data);
            return data;
      } catch (error) {
            alert('getMainInformation : ' + error);
      }
}

/**
 * @function getPerformance
 * @param {*} id
 * @returns performance of users
 */

async function getPerformance(id) {


            

            let res = await axios.get(
                  'http://localhost:3000/user' + `/${id}/performance`
            );

            let data = res.data.data;
            const newData = data.data.map((elm) => {
                  // console.log(elm)
                  return {
                        ...elm,
                        kind: translate[data.kind[elm.kind]],
                  };
            });

            return newData;     

}

export { getMainInformation, getActivity, getAverage, getPerformance };
