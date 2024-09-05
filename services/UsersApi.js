import axios from 'axios';

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getAllUsers = async () => {
  const {data }= await instance.get('/users');
  console.log("data", data);
  return data;

}
console.log("data", getAllUsers());
// const fetchData = async () => {
//   const data = await getAllUsers();
//   console.log("data", data);
// };

// fetchData();
//  console.log("data", getAllUsers());