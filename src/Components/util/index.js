import axios from 'axios';

const apiCall = ( text )=>{
  return new Promise(resolve => {
    axios.post('https://rel.ink/api/links/', {
      url: text,
    })
    .then( (response)=> {
      console.log(response.data);
      let newData = response.data;
      let  existingData= addToLocal(newData);
      resolve(existingData)
    })
    .catch(function (error) {
      console.log(error);
      resolve([]);
    });
  
  })
    
}

const addToLocal = (data)=>{
  var existingData = JSON.parse(localStorage.getItem("allData"));
  if(existingData == null) existingData = [];
  existingData.push(data);
  localStorage.setItem("allData", JSON.stringify(existingData));
  return existingData;
}

export default apiCall;