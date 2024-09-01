import { useState } from "react";
import { SaveUser } from "../Services/ApiCall";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    function handleName(e){
        setName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }
    function saveForm(e){
        e.preventDefault();
        const user = {name,email,password};
        SaveUser(user).then(response =>{
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        });
        console.log(user);
    }
    return(
        <div className="container" style={{width: "500px",marginTop: "100px"}}>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <h3 className="text-center mt-2">SignUp</h3>
                    <div className="card-body">
                        <form>
                        <div class="mb-3">
                                <label for="exampleInputName" class="form-label">Name</label>
                                <input type="text"
                                  class="form-control"
                                  id="exampleInputName"
                                  name="name"
                                  value={name}
                                  onChange={handleName}/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputEamil" class="form-label">Email</label>
                                <input type="email"
                                 class="form-control"
                                  id="exampleInputEamil"
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
                            <button type="submit" class="btn btn-primary" onClick={saveForm}>SignIn</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default SignUp;