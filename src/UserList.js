import React from 'react'


function UserList({user}) {
  return (
    <div>
       {user.length>0?(
        <ul>
            {user.map((user)=>(
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
       ):
       (<p>user not found</p>
    )
       }
      
    </div>
  )
}

export default UserList
