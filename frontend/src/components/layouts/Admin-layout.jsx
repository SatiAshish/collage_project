import { NavLink, Outlet } from "react-router-dom"

export const AdminLayout = () =>{
    return <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to={"/admin/users"}> Users </NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/addBirthday">Birthday</NavLink>
                            </li>
                            <li>
                                <NavLink to="/admin/addAnniversary">Anniversary</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        <Outlet/>

        {/************************************** */}
        
    </>
}