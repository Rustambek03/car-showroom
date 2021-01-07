import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuth from '../../context/AuthContext';
import { Alert } from '@material-ui/lab';
import './SignUp.css';
import { useHistory } from 'react-router-dom';
import Header from '../Dashboard/Header/Header';
import Footer from '../Dashboard/Footer/Footer';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push("/")
        } catch {
            setError('Failed to sign in');
        }
        setLoading(false);
    };

    return (
        <div>
            <Header />
            <div className="Login">
                {error && <Alert severity="error">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            type="password"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>
                    <Button block size="lg" type="submit" disabled={loading}>
                        Sign In
                </Button>
                </Form>
            </div>
            <Footer />
        </div>
    );
};

export default SignIn;