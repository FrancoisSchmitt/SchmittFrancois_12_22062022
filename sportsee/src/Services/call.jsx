import * as Mock from '../Mock/data';
console.log(Mock);

const api = fetch(`http://localhost:3000/user/12`).then((response) => {
      response = response.json();
      response.then((result) => {
            console.log(result);
      });
});

export const getUserInfos = async (id) => {
      try {
            const response = await api.get(`/${id}`);
            return response.data.data;
      } catch (error) {
            return error;
      }
};
