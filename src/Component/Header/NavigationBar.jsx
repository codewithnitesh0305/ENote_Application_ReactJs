import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLoginUsername, isLoggedIn } from "../LocalStorage/TokenStorage";

function NavigationBar() {
    // const [login, setLogin] = useState(false);
    // const [user, setUser] = useState(undefined);
    // useEffect(() => {
    //     setLogin(isLoggedIn());
    //     setUser(getLoginUsername());
    // }, [login]);
    function Logout(){
        window.localStorage.clear();
        window.location.href="./"
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ENote Application</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* {
                    login && (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/saveOrUpdate">Add Notes</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/allNotes">All Notes</Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">{user}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" onClick="Logout">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    )

                } */}

                {/* {
                   // !login && (
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">SignIn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signUp">SignUp</Link>
                                </li>
                            </ul>
                        </div>
                    //)

                //} */}
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">SignIn</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signUp">SignUp</Link>
                                </li>
                            </ul>
                        </div>

            </div>
        </nav>
    )
}
export default NavigationBar;