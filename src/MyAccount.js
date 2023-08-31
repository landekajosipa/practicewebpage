import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';

const user={
  name:"Jopa",
  password:"123ab",
  fullname:"Josipa Landeka",
  email:"land123@gmail.com",
  aboutme:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
}

const MyAccount = () => { 
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [isLogedIn, setIsLogedIn] = useState(false);
    useEffect(() =>{ 
      localStorage.setItem("loginsession", isLogedIn);
    }, [isLogedIn])

    const handleChange = event => {
        setMessage(event.target.value);
    
        console.log('value is:', event.target.value);
      };
    const handleClick = () => {
        if(password==user.password && message==user.name){
          setIsLogedIn(true);
          localStorage.setItem("loginsession", isLogedIn);
        }else{
          setIsLogedIn(false);
          alert("Kredencijali nisu tocni pokusajte ponovo.")
        }
      };
    const handleChangePassword = event => {
          setPassword(event.target.value);
      
          console.log('value is:', event.target.value);
        };
        const handleLogOutClick = () => {
          console.log("test")
          setIsLogedIn(false);
          localStorage.setItem("loginsession",isLogedIn);
          window.location.reload();
        };

    return (<>
      {isLogedIn==false ?  
    <div className='logina'> 
    <div className='login'>
        <div>
        <label for="username"><b></b></label>
        <input className="inputs" type="text" placeholder="Enter Username" name="username" onChange={handleChange} value={message} required/>
        </div>
        <div>
        <label for="password"><b></b></label>
        <input className="inputs" type="password" placeholder="Enter Password" name="password" onChange={handleChangePassword} required/>
        </div>
        <button className='buttons' onClick={handleClick}>Log in</button>
        <button className='buttons' onClick={handleClick}>Sign in</button>
    </div>
    </div> : 
    <div className='personlogin'>
      <img className="loginpic"src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png"/>
      <p className='am'>Fullname:<p>{user.fullname}</p></p>
      <hr className='hr1'></hr>
      <div className='bigdivam'>
      <div className='aboutmeemail'>
      <p className='amemail'>E-mail:</p>
      <p>{user.email}</p>
      <p>Phone number:</p>
      </div>
      <div className='aboutmee'>
      <p className='amam'>About me:</p>
      <p>{user.aboutme}</p>
      </div>
      </div>
      <br></br>
      <button className='buttons' onClick={handleLogOutClick}>Log out</button>
      </div>}
    </>);
};

export default MyAccount;