import { useState } from "react";
import { useAuth } from "../store/auth";

const AddUser = () =>{

    const { authorizationToken } = useAuth();

    const [person, setPerson] = useState({
        name: "",
        email: "",
        dob: "",
    });

    const handleInput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setPerson({
            ...person,
            [name]: value,
        })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(person);
        try {
            const response = await fetch(`http://localhost:8080/api/admin/addUser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: authorizationToken,
                },
                body: JSON.stringify(person),
            })

            if(response.ok){
                const res_data = await response.json();
                console.log("Res from server ", res_data);
                setPerson({ name: "", email: "", dob: ""})
            }

            console.log(response);
            
        } catch (error) {
            console.log("add user ", error);
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
                            <h1 className="main-heading"> Add Member</h1>
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
                                        value={person.username}
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
                                        value={person.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="dob">DOB</label>
                                    <input 
                                        type="date"
                                        name="dob"
                                        placeholder="dob"
                                        id="dob"
                                        required
                                        autoComplete="off"
                                        value={person.dob}
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

export default AddUser;