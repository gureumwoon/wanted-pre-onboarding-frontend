import { useState } from 'react';
import { UserRequest } from '../types/User';

export const useUserForm = (initialValues: UserRequest) => {
    const [userData, setUserData] = useState(initialValues);
    const [isEmail, setIsEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const isEmailCheck = (email: string) => {
        const regEmail = /@/;
        if (regEmail.test(email)) {
            setIsEmail(true);
        } else {
            setIsEmail(false);
        }
    }

    const isPasswordCheck = (password: string) => {
        const regPassword = /^.{8,}$/;
        if (regPassword.test(password)) {
            setIsPassword(true);
        } else {
            setIsPassword(false);
        }
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        isEmailCheck(value);
        handleChange(e);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        isPasswordCheck(value);
        handleChange(e);
    };

    return {
        userData,
        handleChange,
        handleEmailChange,
        isEmail,
        handlePasswordChange,
        isPassword
    };
};


