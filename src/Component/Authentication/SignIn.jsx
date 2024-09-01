import { useState } from "react";
import { GetUser } from "../Services/ApiCall";
import { doLogin } from "../LocalStorage/TokenStorage";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function SignInForm(e){
        e.preventDefault();
        const user = {email,password};
        GetUser(user).then(response =>{
            console.log(response.data);
            doLogin(response.data);
            //navigate("/allNotes");
            window.location.href = "./allNotes"
        }).catch(error =>{
            console.log(error);
        })
        console.log(user)
    }
    return (
        <div className="container" style={{width: "500px",marginTop: "100px"}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <h3 className="text-center mt-2">SignIn</h3>
                        <div className="card-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail" class="form-label">Email</label>
                                    <input type="email"
                                      class="form-control"
                                      id="exampleInputEmail"
                                      name="email"
                                      value={email}
                                      onChange={handleEmail}/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword" class="form-label">Password</label>
                                    <input type="password"
                                     class="form-control"
                                      id="exampleInputPassword"
                                      name="password"
                                      value={password}
                                      onChange={handlePassword}/>
                                </div>
                               
                                <button type="submit" class="btn btn-primary" onClick={SignInForm}>SignIn</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn;