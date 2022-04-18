import React from 'react'
import "./Register.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Anemone from "../image/anemone.png"
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {


    const [errors, setErrors] = useState('');
    const [user, setUser] = useState({
        name: "",
        email: "",
        password1: "",
        password2: ""
    });

    const { name, email, password1, password2 } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    async function Register() {
        let result = await axios.post("http://localhost:8000/api/register", user);
        setErrors('Registration Successful')
        setUser({ name: "", email: "", password1: "", password2: "" }) 

    }

    return (
        <div className="wrapper">
            <h3>Anemone Sign Up</h3>
            <section class="section-head">
                <div class="container">
                    <div class="imgcontainer">
                        <img src={Anemone} className="Anemone" alt="" />
                    </div>

                </div>
            </section>

            <Form className="containers shadow">
                <FormGroup>
                    <Label for="name">Name </Label>
                    <Input
                        type="name"
                        name="name"
                        placeholder="Enter name"
                        value={name}
                        onChange={e => setUser(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email id </Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setUser(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password </Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={password1}
                        onChange={e => setUser(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password2">Re-Enter Password </Label>
                    <Input
                        type="password"
                        name="password2"
                        placeholder="Re-Enter password"
                        value={password2}
                        onChange={e => setUser(e.target.value)}
                    />
                </FormGroup>
                
                <p className="text-white"></p>
                <div >
                    <button className="text-center mb-4" type='submit' onClick={Register} >Register</button>
                </div>
                {/* uncomment when login is made */}
                {/* <Link to="/login" className="text-white ml-5">Have an account?</Link>  */}
            </Form>

        </div>

    );
}

export default Register