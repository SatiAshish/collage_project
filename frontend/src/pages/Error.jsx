import { Link } from 'react-router-dom';

const Error = () =>{
    return (
        <>
            <div id="error-page">
                <div className="content">
                    <h2 className="header">
                        404
                    </h2>
                    <h4>
                        Sorry! page not found
                    </h4>
                    <p>
                        Opps! It seems like the page you're trying to access doesn't exist.
                        If you believe there's an issue, feel free to report it, and we'll
                        look into it.
                    </p>
                    <div className="btns">
                        <Link to="/">return home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error