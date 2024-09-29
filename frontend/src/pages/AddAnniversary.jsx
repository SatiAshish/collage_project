import { useState } from "react";
import { useAuth } from "../store/auth";

const AddAnniversary = () =>{

    const { authorizationToken } = useAuth();

    const [user, setUser] = useState({
        name: "",
        email: "",
        date: "",
    });

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
            const response = await fetch(`http://localhost:8080/api/admin/addAnniversary`, {
                method: "POST",
                headers: {
                    Authorization: authorizationToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            })

            if(response.ok){
                const res_data = await response.json();
                console.log("Res from server ", res_data);
                setUser({ name: "", email: "", date: ""})
            }

            console.log(response);
            
        } catch (error) {
            console.log("add person ", error);
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
                            <h1 className="main-heading"> Add Anniversy</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">name</label>
                                    <input 
                                        type="text"
                                        name="name"
                                        placeholder="name"
                                        id="name"
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
                                    <label htmlFor="date">date</label>
                                    <input 
                                        type="date"
                                        name="date"
                                        placeholder="date"
                                        id="date"
                                        required
                                        autoComplete="off"
                                        value={user.date}
                                        onChange={handleInput}
                                    />
                                </div>
                                <br />

                                <button 
                                    type="submit" 
                                    className="btn btn-submit">Add
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

export default AddAnniversary;