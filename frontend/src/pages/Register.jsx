import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const Register = () =>{

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
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
        console.log(user);
        try {
            const response = await fetch(`http://localhost:8080/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            if(response.ok){
                const res_data = await response.json();
                console.log("Res from server ", res_data);
                storeTokenInLS(res_data.token);
                setUser({ username: "", email: "", phone: "", password: "",})
                navigate("/login");
            }

            console.log(response);
            
        } catch (error) {
            console.log("Register ", error);
        }
    }

    return (
        <>

        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                                src="/images/register.jpg" 
                                alt="Fill the registration form" 
                                width="400"
                                height="500"
                            />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading"> Registration form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">username</label>
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input 
                                        type="number"
                                        name="phone"
                                        placeholder="phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                        type="password"
                                        name="password"
                                        placeholder="password"
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
                                    className="btn btn-submit">Register
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

export default Register;