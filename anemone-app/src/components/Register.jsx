import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import "./Register.css";
import { Link } from "react-router-dom";
import Anemone from "../image/anemone.png"


export default class Register extends Component {
    userData;
    constructor(props) {
        super(props);
        this.state = {
            registerData: {
                name: "",
                email: "",
                password: "",
                password2: "",
                isLoading: "",
            },
            msg: "",
        };
    }

    onChangehandler = (e, key) => {
        const { registerData } = this.state;
        registerData[e.target.name] = e.target.value;
        this.setState({ registerData });
    };
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.setState({ isLoading: true });
        axios
             .post("http://localhost:8000/api/user-signup", this.state.registerData)
            // .post("http://localhost:3000", this.state.registerData)
            .then((response) => {
                this.setState({ isLoading: false });
                if (response.data.status === 200) {
                    this.setState({
                        msg: response.data.message,
                        registerData: {
                            name: "",
                            email: "",
                            password: "",
                            password2: "",
                        },
                    });
                    setTimeout(() => {
                        this.setState({ msg: "" });
                    }, 2000);
                }

                if (response.data.status === "failed") {
                    this.setState({ msg: response.data.message });
                    setTimeout(() => {
                        this.setState({ msg: "" });
                    }, 2000);
                }
            });
    };
    render() {
        const isLoading = this.state.isLoading;
        return (
            <div>
                        <h3>Anemone Sign Up</h3>
                        <section class="section-head">
                            <div class="container">
                                <div class="imgcontainer">
                            <img src={Anemone} className="Anemone" alt=""/>
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
                            value={this.state.registerData.name}
                            onChange={this.onChangehandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email id </Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={this.state.registerData.email}
                            onChange={this.onChangehandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password </Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={this.state.registerData.password}
                            onChange={this.onChangehandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password2">Re-Enter Password </Label>
                        <Input
                            type="password"
                            name="password2"
                            placeholder="Re-Enter password"
                            value={this.state.registerData.password2}
                            onChange={this.onChangehandler}
                        />
                    </FormGroup>

                    <p className="text-white">{this.state.msg}</p>
                    <Button
                        className="text-center mb-4"
                        color="success"
                        onClick={this.onSubmitHandler}
                    >
                        Register
                        {isLoading ? (
                            <span
                                className="spinner-border spinner-border-sm ml-5"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        ) : (
                            <span></span>
                        )}
                    </Button>
                    {/* uncomment when login is made */}
                    {/* <Link to="/login" className="text-white ml-5">Have an account?</Link>  */}
                </Form>
            </div>
        );
    }
}