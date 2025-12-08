import {useState} from 'react';

export function useForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const onSubmitForm = (event) => {
        event.preventDefault();

        if (!firstName || !lastName) {
            setError('Error in your first and last name.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Error valid email address.');
            return;
        }

        if (password.length < 5 || !/[^\w\s]/.test(password)) {
            setError('Error enter a password with at least 5 characters and special characters.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        alert(JSON.stringify({
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        }));

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
    };

    return {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        error,
        setFirstName,
        setLastName,
        setEmail,
        setPassword,
        setConfirmPassword,
        setError,
        onSubmitForm
    };
}