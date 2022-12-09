import { useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import FirebaseContext from "../context/firebase";

export default function Login() {
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = () => {

    };

    useEffect(() => {
        document.title = 'Login - Jamestagram';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen">
            I Have No Idea
        </div>
    );
}