import axios from "axios";

export const loginRequest = async ({emailAdress, password}) => {
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

export const createUserRequest = async ({profilePic, emailAdress, password, pet, userName, displayName}) => {
    try {
        const response = await axios.post('http://localhost:3001/api/v1/signUp', {
            emailAdress,
            password,
            displayName,
            userName,
            pet,
            profilePic
        });
        return response.data;
    } catch (error) {
        console.error('user creation failed:', error);
    }
};

