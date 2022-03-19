import React from "react";
import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
        <Link to='/'><div>Home</div></Link>
        <Link to='/about'><div>About</div></Link>

        </>
    )
}
export default Home;