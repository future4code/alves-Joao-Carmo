import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Feed() {
  const navigate = useNavigate()
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
    } else {
      navigate('/login')
    }
  }, [])

  return (
    <div>Feed</div>
  )
}
