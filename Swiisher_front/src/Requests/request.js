import axios from "axios";


const loginRequest = async ({emailAdress, password}) =>{
    try {
        const response = await axios.post('http://localhost:3001/api/v1/signIn', {
            emailAdress,
            password
        });
        return response.data;
    } catch (error) {
        console.error('login failed:', error);
    }
};

export default loginRequest;