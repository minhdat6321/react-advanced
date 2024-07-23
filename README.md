-  CREATE`.env` FOLDER ROOT file chứa environment  variable của ứng dụng. Combo dùng `REACT_APP_BASE_URL =""`


-> Create config.js file `export const BASE_URL = process.env.REACT_APP_BASE_URL`

- Create apiService.js cung level voi config.js`
import axios from "axios";
import { BASE_URL } from "./config";

const apiService = axios.create({
  baseURL: BASE_URL,
})

export default apiService;
`
- Xoa axios in App() thay bang `        const res = await apiService.post('/api/register',{})
`