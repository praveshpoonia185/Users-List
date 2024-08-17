import React, { useEffect, useState } from 'react'

const UserCard = () => {
  const [users, setUsers] = useState([]);


  const getUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setUsers(result);

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <>
      <h2 className='text-center'>List of Github Users</h2>
      <div className='container mt-5'>
        <div className='row text-center'>
          {
            users.map((card) => {

              return (
                <>
                  <div className="col-12 col-md-4 mt-5" key={card.id}>
                    <div className='card p-2'>
                      <div className='d-flex align-items-center'>
                        <div className='image'>
                          <img src="" className='rounded' width="155"></img>
                        </div>
                        <div className='ms-3 w-100'>
                          <h4 className='mt-0 mb-0 text-start'>{card.name}</h4>
                          <span>{card.email}</span>

                          <div className='p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats'>
                            <div className='d-flex flex-column'><span className='articles'>{card.address.city}</span></div>
                            <div className='d-flex flex-column'><span className='followers'>{card.address.zipcode}</span></div>
                            <div className='d-flex flex-column'><span className='rating'>{card.phone}</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div >
                </>
              )
            })
          }
        </div>
      </div >
    </>
  )
}

export default UserCard;