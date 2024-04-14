import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Bloggers = () => {

  axios.defaults.withCredentials = true
  const [users, setUsers] = useState<any>([])

  useEffect(() => {
    const response = axios.get(`${process.env.API_URL}/api/v1/users/all-users`)
    response.then((res) => {
      setUsers(res.data.data)
    })
    response.catch((err) => {
      console.log(err)
    })

  }, []);

  console.log(users)

  return (
    <div className='w-full flex justify-center h-[20rem]'>
      f
    </div>
  )
}

export default Bloggers