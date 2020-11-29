import axios from 'axios'
const appSettings = require("tns-core-modules/application-settings");

const authService = {
  startRegister,
  auth,
  getUserInfo,
  getConfirm,
  register
};

async function startRegister(user) {
  const formData = new FormData();
  formData.append("name", user.name);
  formData.append("phone", user.phone);
  formData.append("password", user.password);
  formData.append("re_password", user.re_password);
  formData.append("country", user.country);
  formData.append("city", user.city);
  const res = await axios.post(
    "https://makeweb.com.ua/api/ru/startRegister",
    formData
  );
  console.log('tokenStartRegister',res.data.success)
  return res.data.success
}

async function auth(user) {
  const formData = new FormData();
  formData.append("phone", user.phone);
  formData.append("password", user.password);
  const res = await axios.post(
    "https://makeweb.com.ua/api/ru/login",
    formData
  ); 
  return res.data.success
}

async function getUserInfo() {
  const token = appSettings.getString("token")
  console.log('tokenGetUserInfo',token)
  const res = await axios.get(`http://makeweb.com.ua/api/ru/get-user-info?token=${token}`)
  console.log(res.data)
  return res.data
}

async function getConfirm() {
  const token = appSettings.getString("token")
  console.log(`http://makeweb.com.ua/api/ru/getConfirm?token=${token}`)
  const res = await axios.post(`http://makeweb.com.ua/api/ru/getConfirm?token=${token}`)
  console.log(res.data)
  return res.data
}

async function register(code) {
  const formData = new FormData();
  formData.append("code", code);
  const token = appSettings.getString("token")
  console.log(`http://makeweb.com.ua/api/ru/register?token=${token}`)
  const res = await axios.post(`http://makeweb.com.ua/api/ru/register?token=${token}`,formData)
  console.log(res.data)
  return res.data
}


export default authService