import React from 'react'

interface Address{
    street:string
}
interface User { // magic typescript idk really its like defining an object / typedef struct
    id: number;
    name: string;
    email: string;
    phone:string;
    address: Address;
}

const UsersPage = async () => { // there is a relation of async and await
    const res = await fetch(
        // whenever use fetch function, next js automatically store result as data cache 
        'https://jsonplaceholder.typicode.com/users', { next:{ revalidate:10 }} ) // if you disable caching, next js is gonna thinks the data
        // on this page is going to change so its not gonna render this page statically, its going to render it on request time.

    const users:User[] = await res.json();
  return (
    <>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">Users</h1>
        <p>{new Date().toLocaleTimeString()}</p>
        {/* time stamp */}
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
            {users.map(user => 
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.street}</td> 
                </tr>)}
            </tbody>
        </table>
    </>
  )
}

export default UsersPage