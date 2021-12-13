import axios from 'axios';

export default getGithubAccountData = async () => {
    let res = await axios.get("http://localhost:3000/categories");
    console.log("getGithubAccountData res.data: ", res.data);
    return res.data;
}