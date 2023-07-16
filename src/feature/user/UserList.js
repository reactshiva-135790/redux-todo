import React from 'react'
import Button from '../../components/Button'
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser } from '../../redux/features/userSlice'


function UserList() {
    const dispatch = useDispatch()
    const users = useSelector(store => store.users)
    console.log(users)
  
    const handleRemoveUser = (id) => {
     dispatch(deleteUser({ id : id }))
    }

    const renderCard = () => users.map((user) =>
        <div className='bg-gray-300 p-5 flex items-center justify-between' key={user.id}>
            <div>
                <h3 className='font-bold text-lg text-gray-700 '>{user.name}</h3>
                <span className='font-normal text-gray-600'>{user.email}</span>
            </div>
            <div className="flex gap-4">
                <Link to ={`edit-user/${user.id}`}><button>Edit</button></Link>
                <button onClick={() => handleRemoveUser(user.id)}>Delete</button>
            </div>
        </div>
    )
    return (
        <div>
            <Link to="add-user"><Button>Add User</Button></Link>
            <div className='grid gap-5 md:grid-cols-2'>
                {
                    users.length ? renderCard() : <p className='text-center col-span-2 text-gray-700'>No user</p>
                }
            </div>

        </div>


    )
}

export default UserList
