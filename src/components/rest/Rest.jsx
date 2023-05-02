import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Rest() {
    const [user, setUser] = useState([]);
    const [input, setInput] = useState('');

    const myFun = async function() {

        const response= await axios.get(`https://restcountries.com/v3.1/all`);
        const data = await response.data;
        
        setUser(data);
        console.log(data);
    } 

    useEffect(() => {
        myFun()
    }, []);

    const filFun = user.filter((value)=> value.name.common.toLowerCase().includes(input.toLowerCase())).map(user => (
        <div className='colRest col-12 col-sm-6 col-lg-4'>
            <p className='text-center text-uppercase'>{user.altSpellings[2]}</p>
            <img className='card-img' src={user.flags.png} alt={user.flags.alt}/>
            <h1><span>Name:</span> {user.name.common}</h1>
            <h2><span>Capital:</span> {user.capital}</h2>
            <p><span>Area:</span> {user.area} km²</p>
            
        </div>
    ))


    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
            <h1>Restcountries</h1>
            <form className='w-75 d-flex justify-content-end align-items-end'>
                <label for="search" className='label w-75'>
                    <input onChange={(e)=>setInput(e.target.value)} type="text" id="search" name="search" className='input w-100' placeholder='Search country' />
                    
                </label>
            </form>
            </div>
            {user.length > 0 && (
                <div className='row rowRest'>
                    {filFun}
                </div>
            )}
        </div>
    )
}

export default Rest;


