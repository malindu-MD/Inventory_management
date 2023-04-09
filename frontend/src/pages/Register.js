import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/common_inventory/FormInput";
import "./Register.css"
import { Button } from '@chakra-ui/react'
import toast from 'react-hot-toast'
import axios from 'axios';

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassowrd, setConfirmPassword] = useState(" ");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        console.log("hello");

        try {
            if (confirmPassowrd !== password) {

                console.log("hello");

                toast.error("Password dont match")
                return;

            }

            await axios.post("http://localhost:8070/users/reg_user", {

                user_email: email,
                password: password

            })
            toast.success("Registration successfull");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            navigate("/login");


        } catch (err) {

            console.log(err);
            toast.error("Something went wrong");
        }

    }



    return (
        <div className="center-div">

            <form className="register-container">
                <h2>Register</h2>

                <FormInput lable="Email Address" type="email" value={email
                } onChange={(e) => setEmail(e.target.value)} />
                <FormInput lable="Password" type="password" value={password
                } onChange={(e) => setPassword(e.target.value)} />
                <FormInput lable="Confirm Password" type="password" value={confirmPassowrd
                } onChange={(e) => setConfirmPassword(e.target.value)} />

                <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
            </form>

        </div>
    )


}
export default Register;