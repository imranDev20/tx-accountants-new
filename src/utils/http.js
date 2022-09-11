import axios from 'axios';
    
export default axios.create({
 baseURL: `${process.env.STRAPI_API_URL}/`,
 headers: {
   "Content-type": "application/json",
 },
});