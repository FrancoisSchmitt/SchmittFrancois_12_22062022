import axios from "axios";


  

  async function getMainInformation() {

    let res = await axios.get('http://localhost:3000/user/12');
  
    let data = res.data.data;
    return data
    // console.log(data);
  }
  getMainInformation()

  export{
      getMainInformation,

  }