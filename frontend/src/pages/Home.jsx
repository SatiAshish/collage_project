
const Home = () =>{

    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container" grid grid-two-cols >
                        <div className="hero-content">
                            <h1>
                                Welcome to Graphic Era Hill University.
                            </h1>

                            <p>
                                This is a notification sending app.
                                It sendes autometic messages for faculty, staff, alumini,
                                and students on their Birthday..

                                For this you have to add new users to the database.

                                register yourself and add new users so that they can
                                get birthday wishes.
                            </p>
                            
                            {/* <div className="btn btn-group">
                                <a href="/register">
                                    <button className="btn">SignUp</button>
                                </a>

                                <a href="/login">
                                    <button className="btn secondary-btn">Login</button>
                                </a>
                            </div> */}
                        </div>

                        <div className="hero-image">
                            <img 
                                src="/images/rgistr.jpg" 
                                alt="Home image" 
                                width="400"
                                height="500"
                            />
                        </div>

                    </div>
                </section>
            </main>

            <section className="section-analytics">
                <div className="container grid grid-four-cols">
                    <div className="div1">
                        <h2>4</h2>
                        <p>Campus</p>
                    </div>
                    <div className="div1">
                        <h2>10,000+</h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2>1</h2>
                        <p>Developer</p>
                    </div>
                    <div className="div1">
                        <h2>24/7</h2>
                        <p>Service</p>
                    </div>
                </div>
            </section>

            {/* 3rd section */}

            {/* <h1>About us</h1>

            <section className="section-hero">
                    <div className="container" grid grid-two-cols >

                    <div className="hero-image">
                            <img 
                                src="/images/rgistr.jpg" 
                                alt="Home image" 
                                width="400"
                                height="500"
                            />
                        </div>

                        <div className="hero-content">
                            <h1>
                                We are the students of Graphic Era.
                            </h1>

                            <p>
                                This is a notification sending app.
                                It sendes autometic messages for faculty, staff, alumini,
                                and students on their Birthday..

                                For this you have to add new users to the database.

                                register yourself and add new users so that they can
                                get birthday wishes.
                            </p>
                            
                            <div className="btn btn-group">
                                <a href="/register">
                                    <button className="btn">SignUp</button>
                                </a>

                                <a href="/login">
                                    <button className="btn secondary-btn">Login</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </section> */}
        </>
    )
}

export default Home;