import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminUsers = () =>{
    const[users, setUsers] = useState([]);

    const { authorizationToken } = useAuth();

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            })
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const deleteUser = async (id) =>{
        try {
            const response = await fetch(`http://localhost:8080/api/admin/users/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });
    
            const data = await response.json();
            console.log(`users after delete${data}`);

            if(response.ok){
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
        
    };

    useEffect(()=>{
        getAllUsersData();
    }, [])

    return (
        <>
            <section className="admin-user-section">
                <div className="container">
                    <h1>Admin Users Data </h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((curUser, index) =>{
                                return (
                                    <tr key={index}>
                                        <td>{curUser.username}</td>
                                        <td>{curUser.email}</td>
                                        <td>{curUser.phone}</td>
                                        <td> 
                                            <button onClick={() => deleteUser(curUser._id)}> Delete </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </section>
        </>
    )
}