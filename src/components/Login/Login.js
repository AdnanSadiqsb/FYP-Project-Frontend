import React,{useEffect} from 'react'

function Login() {
    useEffect(()=>{
        window.scrollTo(0, 0);

    },[])
  return (
    <div>
         
    <div className="breadcrumbs_area">
        <div className="container">   
            <div className="row">
                <div className="col-12">
                    <div className="breadcrumb_content">
                       <h3>Login</h3>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>         
    </div>

    <div className="customer_login">
        <div className="container">
            <div className="row">
             
                <div className="col-lg-6 col-md-6">
                    <div className="account_form">
                        <h2>login</h2>
                        <form action="#">
                            <p>   
                                <label>Username or email <span>*</span></label>
                                <input type="text"/>
                             </p>
                             <p>   
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                             </p>   
                            <div className="login_submit">
                               <a href="#">Lost your password?</a>
                                <label for="remember">
                                    <input id="remember" type="checkbox"/>
                                    Remember me
                                </label>
                                <button type="submit">login</button>
                                
                            </div>

                        </form>
                     </div>    
                </div>
                
                <div className="col-lg-6 col-md-6">
                    <div className="account_form register">
                        <h2>Register</h2>
                        <form action="#">
                            <p>   
                                <label>User Name  <span>*</span></label>
                                <input type="text"/>
                            </p>
                            <p>   
                                <label>Email address  <span>*</span></label>
                                <input type="text"/>
                             </p>
                             
                             <p>   
                                <label>Passwords <span>*</span></label>
                                <input type="password"/>
                             </p>
                               
                                <label>Image <span>*</span></label>
                                <input type="file" name="file" id="file" className="inputfile" />
                                <label className='label' for="file">Choose a file</label>
                             
                            
                            <div className="login_submit">

                                <button type="submit">Register</button>
                            </div>
                        </form>
                    </div>    
                </div>
            </div>
        </div>    
    </div>
    </div>
  )
}

export default Login
