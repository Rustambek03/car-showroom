import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuth from '../../context/AuthContext';
import './SignUp.css';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../Dashboard/Footer/Footer';
import Header from '../Dashboard/Header/Header';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signup, currentUser } = useAuth()
    const history = useHistory()

    async function handleSubmit(event) {
        event.preventDefault();

        if (password !== passwordConfirmation) {
            return setError("Password do not match")
        }

        try {
            setError('')
            setLoading(true)
            await signup(email, password)
            history.push("/")
        } catch {
            setError("Failed to sign up")
        }
        setLoading(false)
    }

    console.log(history)

    return (
        <>
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
            <Footer />
        </>
    );
};

export default SignUp;