import React from "react";
import '../css/login.css';

export default function Login(){
    return(
        <div> 
            {/* <video autoplay muted loop>
                <source src="https://vod-progressive.akamaized.net/exp=1710441973~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3935%2F15%2F394677254%2F1676023708.mp4~hmac=4e9b702df4777ee704d130a3f98a691229fd8e95dc6af222359835fbf68e2780/vimeo-prod-skyfire-std-us/01/3935/15/394677254/1676023708.mp4?filename=file.mp4" type="video/mp4" />
            </video> */}
            <div className="box">

                <div><h2>LETS PARTY</h2></div>
                <div>
                <form className="login-form">
                    <div>
                        <label>Username:</label>
                        <input type="text" placeholder="Enter your name"></input>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" placeholder="Enter password"></input>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                   
                </form>
                </div>
            </div>
           

        </div>  
    );
}