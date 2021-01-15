import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuth from '../../context/AuthContext';
import { Alert, AlertTitle } from '@material-ui/lab';
import './SignUp.css';
import { useHistory } from 'react-router-dom';
import Header from '../Dashboard/Header/Header';
import Footer from '../Dashboard/Footer/Footer';
import { Grid } from '@material-ui/core';
import { useToasts } from 'react-toast-notifications';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Fade from 'react-reveal/Fade';

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const { login, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { addToast } = useToasts();
    const history = useHistory()


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push("/")
        } catch {
            addToast('Failed to sign in.', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        setLoading(false);
    };



    return (
        <>
            <Header />
            <Grid container className="sign-in">
                <div className="Login-image">
                    <img style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(3px)" }} src="https://source.unsplash.com/featured/?painting" alt="" />
                </div>
                <div className="Login">
                    <Fade top>
                        <div className="Login-content">
                            <div className="sign-in-icon">
                                <LockOpenIcon style={{ fontSize: "60px", marginTop: "10px" }} />
                                <h2 style={{ margin: "0" }} >Sign In</h2>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label style={{ marginBottom: "0" }}>Email</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label style={{ marginBottom: "0" }}>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group size="lg" controlId="password">
                                    <Form.Label style={{ marginBottom: "0" }}>Password Confirmation</Form.Label>
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
                    </Fade>
                </div>
                {/* <Footer /> */}
            </Grid>
        </>
    );
};

export default SignIn;