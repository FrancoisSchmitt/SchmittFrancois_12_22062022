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

const mock = false;

const translate = {
      energy: 'Energie',
      strength: 'Force',
      cardio: 'Cardio',
      endurance: 'Endurance',
      speed: 'Vitesse',
      intensity: 'Intensité',
};

/**
 * @function IdMock
 * @param {*} id
 * @returns Id: 0  = 12 or Id: 1 = 18
 */

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
                  const test = USER_MAIN_DATA[positionArray];
                  return test;
            }

            let res = await axios.get('http://localhost:3000/user' + `/${id}`);

            let data = res.data.data;
            return data;
      } catch (error) {
            console.log('getMainInformation : ' + error);
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
                  const test = USER_ACTIVITY[positionArray];
                  return test;
            }
            let res = await axios.get(
                  'http://localhost:3000/user' + `/${id}/activity`
            );

            let data = res.data.data;
            return data;
      } catch (error) {
            console.log('getActivity : ' + error);
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
            console.log('getAverage : ' + error);
      }
}

/**
 * @function getPerformance
 * @param {*} id
 * @returns performance of users
 */

async function getPerformance(id) {
      try {
            if (mock) {
                  const positionArray = IDMock(id);
                  let res = USER_PERFORMANCE[positionArray];
                  const data = res;
                  const newData = data.data.map((elm) => {
                        return {
                              ...elm,
                              kind: translate[data.kind[elm.kind]],
                        };
                  });
                  return newData;
            }
            let res = await axios.get(
                  'http://localhost:3000/user/' + `${id}/performance`
            );

            let data = res.data.data;
            const newData = data.data.map((elm) => {
                  return {
                        ...elm,
                        kind: translate[data.kind[elm.kind]],
                  };
            });
            return newData;
      } catch (error) {
            console.log('getPerformance : ' + error);
      }
}

/**
 * @function idExist
 * @param {*} id
 * @returns filter between user.id and the id that is passed as a parameter
 */

function idExist(id) {
      let responseId = false;
      if (
            USER_MAIN_DATA.filter((users) => users.id === parseInt(id)).length >
            0
      ) {
            return (responseId = true);
      }

      console.log(responseId);
}

export { getMainInformation, getActivity, getAverage, getPerformance, idExist };
