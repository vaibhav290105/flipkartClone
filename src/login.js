import React from 'react';
import './login.css';

const Login = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
      <div id="myModal" className={`modal${isOpen ? 'open' : ''}`} style={{ display: isOpen ? 'block' : 'none' }}>
        <div className="modal-content hidden">
        <span onClick={() => document.querySelector('.modal-content').classList.toggle('hidden')} className="close">&times;</span>
          <div className="content">
            <table>
              <tr>
                <th className="th1">
                  <h1 className='d1'>Login</h1>
                  <h4 className="d2">Get Access To Your Orders, Wishlists and Recommendations</h4>
                  <img className="i1" src="https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png" height="200px" width="200px" alt="Flipkart Logo" />
                </th>
                <th className="th2">
                  <h6 className="d6">Enter mobile number</h6>
                  <input className="telephone" type="tel" name="telephone" />
                  <hr className="hr1" width="500px" color="blue" />
                  <input className="otp1" type="submit" name="otp" value="Login" />
                  <form action="file:///C:/Users/LENOVO/signuppage.html" method="get">
                    <input className="login" type="submit" name="login" value="New To Flipkart? Sign-Up" />
                  </form>
                  <h6 className="d7">Enter Password</h6>
                  <input className="password" type="password" name="Enter Password" />
                  <hr className="hr2" width="500px" color="blue" />
                </th>
              </tr>
            </table>
          </div>
        </div>
        <button onClick={() => document.querySelector('.modal-content',).classList.toggle('hidden')} className="button1">CLICK HERE</button>
      </div>
    );
  };

export default Login;