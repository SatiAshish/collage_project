import { useEffect, useState } from "react";

const API = 'http://localhost:8080/api/auth/getUser';



const List = () =>{

    const [ users, setUsers ] = useState([])

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if(data.length > 0){
                setUsers(data);
            }
            console.log(data);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        fetchUsers(API);
    },[])

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>D.O.B</th>
                    </tr>
                    <tbody>
                        <ListData users={users} />
                    </tbody>
                </thead>
            </table>

        </>

    );
}

export default List;