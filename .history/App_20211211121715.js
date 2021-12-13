/* import React from 'react';
import ScreenDisplay from './src/navigations/NavigationTabs';

export default function App() {
  return (
    <ScreenDisplay />
  );
}
 */


import axios from 'axios';
const baseUrl = 'http://localhost:3000/category';

// Passing configuration object to axios
const fetchUser = async () => {
  const configurationObject = {
    method: 'get',
    url: `${baseUrl}/api/users/1`,
  };
  const response = await axios(configurationObject);
  console.log(response.data);
};

// Invoking get method to perform a GET request
const fetchUser = async () => {
  const url = `${baseUrl}/api/users/1`;
  const response = await axios.get(url);
  console.log(response.data);
};