import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuth from '../../context/AuthContext';
import './SignUp.css';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Dashboard/Footer/Footer';
import Header from '../Dashboard/Header/Header';
import { Grid } from '@material-ui/core';
import { useToasts } from 'react-toast-notifications';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Fade from 'react-reveal/Fade';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signup, currentUser } = useAuth()
    const { addToast } = useToasts();
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            return addToast('Password do not match', {
                appearance: 'warning',
                autoDismiss: true,
            });
        }

        try {
            // setError('')
            setLoading(true)
            await signup(email, password)
            history.push("/")
        } catch {
            addToast('Failed to sign up.', {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        setLoading(false)
    }

    console.log(history)

    return (
        <>
            <Header />
            <Grid container className="sign-in">
                <div className="Login-image">
                    <img style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(3px)" }} src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="Login">
                    <Fade top>
                        <div className="Login-content">
                            <div className="sign-in-icon">
                                <LockOpenIcon style={{ fontSize: "50px", marginTop: "10px" }} />
                                <h2 style={{ margin: "0" }} >Sign Up</h2>
                            </div>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group size="lg" controlId="email">
                                    <Form.Label style={{ marginBottom: "0" }} >Email</Form.Label>
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
                                    Sign Up
                        </Button>
                                <div style={{ textAlign: "center" }}>
                                    <Link to="/signIn" style={{ textDecoration: "none" }}>
                                        <p style={{ cursor: "pointer", marginTop: "10px", color: "black" }}>
                                            Already have an account? Log In
                        </p>
                                    </Link>
                                </div>
                            </Form>
                        </div>
                    </Fade>
                </div>
                {/* <Footer /> */}
            </Grid>
        </>
    );
};

export default SignUp;