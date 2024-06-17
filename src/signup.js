import React from 'react';
import "./signup.css";
//signup
const SignUpPage = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className={`modal${isOpen ? 'open' : ''}`}>
            <div className="modal-content hidden">
            <span onClick={() => document.querySelector('.modal-content').classList.toggle('hidden')} className="close">&times;</span>
                <div className="content">
                    <table>
                        <tr>
                            <th className="th1">
                                <h1 className='d1'>Looks like you're new here!</h1>
                                <h4 className="d2">Sign up with your mobile number to get started</h4>
                                <img className="i1" src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" height="200px" width="200px" />
                            </th>
                            <th className="th2">
                                <h6 className="d6">Enter mobile number</h6>
                                <input className="telephone" type="tel" name="telephone" />
                                <hr className="hr1" width="500px" color="blue" />
                                <input className="otp1" type="submit" name="otp" value="CONTINUE" />
                                <form action="file:///C:/Users/LENOVO/loginpage.html" method="get">
                                    <input className="login" type="submit" name="login" value="Existing User? Log in" />
                                </form>
                                <p className="p1">By continuing, you agree to Flipkart's <a className="a1" href="https://www.flipkart.com/pages/terms">Terms of use</a> and <a className="a2" href="https://www.flipkart.com/pages/privacypolicy">Privacy Policy</a></p>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
            <button onClick={() => document.querySelector('.modal-content').classList.toggle('hidden')} className="button1">CLICK HERE</button>
        </div>
    );
};

export default SignUpPage;