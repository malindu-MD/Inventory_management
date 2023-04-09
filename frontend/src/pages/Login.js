import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/common_inventory/FormInput";
import "./Register.css"
import { Button } from '@chakra-ui/react'
import toast from 'react-hot-toast'
import axios from 'axios';
import { useGlobal } from "../GlobalContext";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { user, setUser } = useGlobal();

    const handleSubmit = async () => {


        try {


            const result = await axios.post("http://localhost:8070/users/log_user", {

                user_email: email,
                password: password

            });

            console.log(result.data);
            setUser(result.data.user);


            toast.success("Login successfull");
            setEmail("");
            setPassword("");
            navigate("/");


        } catch (err) {

            console.log(err);
            toast.error("Something went wrong");
        }

    }



    return (
        <div className="center-div">

            <form className="register-container">
                <h2>Login</h2>

                <FormInput lable="Email Address" type="email" value={email
                } onChange={(e) => setEmail(e.target.value)} />
                <FormInput lable="Password" type="password" value={password
                } onChange={(e) => setPassword(e.target.value)} />

                <Button colorScheme='blue' onClick={handleSubmit}>Login</Button>
            </form>

            {user && user.user_email}

        </div>
    )


}
export default Login;