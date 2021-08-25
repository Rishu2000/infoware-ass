import React, {useState, useEffect} from 'react'
import axios from 'axios'
import WelcomeAdmin from "./WelcomeAdmin"
import WelcomeUser from "./WelcomeUser"

const Welcome = ({user, setUser, admin}) => {

    return (
        <div>
            {admin?(
                <WelcomeAdmin/>
            ):(
                <WelcomeUser/>
            )}  
        </div>
    )
}

export default Welcome