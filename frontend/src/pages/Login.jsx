import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";


const Login = () =>{

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();


    const handleInput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:8080/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            if(response.ok){
                alert("login successfull..");
                const res_data = await response.json();
                storeTokenInLS(res_data.token);
                setUser({email: "", password: "",})
                navigate("/");
            }else{
                alert("invalid Credencial..");
            }

            console.log(response);
            
        } catch (error) {
            console.log("login ", error);
        }
    }

    return (
        <>

        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <
                                img src="/images/log.jpg" 
                                alt="Fill the login form" 
                                width="400"
                                height="500"
                            />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading"> Login form </h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                            <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br />

                                <button 
                                    type="submit" 
                                    className="btn btn-submit">Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    
    </>
    )
}

export default Login;