import React from 'react'
import { useEffect, useState } from 'react'

export const RamdonUsers = () => {

    const URL = 'https://api.randomuser.me/';
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetch(URL)
         .then((r)=>r.json())
         .then((d)=>{
            console.log(d);
            const UserData = {
                key: d.results[0].cell,
                name: d.results[0].name.first,
                email: d.results[0].email,
                photo: d.results[0].picture.large,
            }
            setUser(UserData);
         })
    }, []);

  return (
    <div>
        <hr />
        <h1>Random User</h1>
        <div className='d-flex flex-row  flex-wrap justify-content-center w-100 mt-5'>
            {
                user ? (
                    <div className='d-flex flex-col flex-fill' key={user.key}>
                    <div className='card'>
                        <div className='card-header'>
                            <img src={user.photo} alt="photo" className="card-img-top img-fluid"/>
                        </div>
                        <div className='card-body'>
                            <h5 className="card-title">{user.name}</h5>
                            <p className='card-text'>{user.email}</p>
                        </div>
                    </div>
                </div>
                ) : null
            }
        </div>
    </div>
  )
}
