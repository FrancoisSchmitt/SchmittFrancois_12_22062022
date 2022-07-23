/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
      USER_ACTIVITY,
      USER_MAIN_DATA,
      USER_AVERAGE_SESSIONS,
      USER_PERFORMANCE,
} from '../Mock/data';

/**
 * @const translate api english to french
 * @const mock = false, if true the website use data to ../Mock/data.js
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



/**
 * @function idExist - filter ids to check if they exist
 * @param {*} id
 */

 function idExist(id) {
      let responseId = false;
      if (
            USER_MAIN_DATA.filter((users) => users.id === parseInt(id)).length >
            0
      ) {
            return (responseId = true);
      }
}

/**
 * @function IdMock - switch that checks if the id = 12 and returns 0 or 18 and returns 1
 * @param {*} id
 * @returns {number}
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
 * @function getMainInformation - try a condition if mock = true and it returns the mock data otherwise it returns the GET api request 
 * @param {*} id
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
 * @function getActivity - try a condition if mock = true and it returns the mock data otherwise it returns the GET api request 
 * @param {*} id
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
 * @function getAverage - try a condition if mock = true and it returns the mock data otherwise it returns the GET api request 
 * @param {*} id
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
 * @function getPerformance - try a condition if mock = true and it returns the mock data otherwise it returns the GET api request 
 * @param {*} id
 * @const newData - change the data in the table for the translation from English to French
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

export { getMainInformation, getActivity, getAverage, getPerformance, idExist };
