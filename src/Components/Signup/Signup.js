import React from 'react'
import './Signup.css';

function Signup() {
    return (
        <div class="login">
        <h2 class="login__heading">Welcome to SabMilega</h2>
        <div class="login__form container">
            <form>
                <div>
                    <h4 class="login__formheading">SignUp</h4>
                    <hr/>
                </div>
                <div class="mb-3">
                    <label for="Name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="Name"/>
                </div>
                <div class="mb-3">
                    <label for="Contact Number" class="form-label">Contact Number</label>
                    <input type="number" class="form-control" id="Contact Number"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="btn-end container">
                <button type="submit" class="btn btn-primary">Sign Up</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Signup
