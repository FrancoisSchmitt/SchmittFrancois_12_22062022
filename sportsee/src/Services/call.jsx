const api = fetch(`http://localhost:3000/user`).then((response) => {
      response = response.json();
      response.then((result) => {
            console.log(result);
      });
});

export const getUserInfos = async (id) => {
      try {
            const response = await api.get(`/${id}`);
            console.log(response.data.data);
            return response.data.data;
      } catch (error) {
            return error;
      }
};


export const getUserActivity = async (id) => {
      try {
            const response = await api.get(`/${id}/activity`);
            console.log(response.data.data);
            return response.data.data;
      } catch (error) {
            return error;
      }
};

export const getUserAverageSessions = async (id) => {
      try {
            const response = await api.get(`/${id}/average-sessions`);
            console.log(response.data.data);
            return response.data.data;
      } catch (error) {
            return error;
      }
};

export const getUserPerformance = async (id) => {
      try {
            const response = await api.get(`/${id}/performance `);
            console.log(response.data.data);
            return response.data.data;
      } catch (error) {
            return error;
      }
};

