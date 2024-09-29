const ListData = ()=>{

    return (
        <>
            {
                users.map((curUser) => {
                    const {username,email,dob} = curUser;

                    return (
                        <tr key={email}>
                            <td>{username}</td>
                            <td>{email}</td>
                            <td>{dob}</td>
                        </tr>
                    )
                })
            }
        </>
    )

}

export default ListData;