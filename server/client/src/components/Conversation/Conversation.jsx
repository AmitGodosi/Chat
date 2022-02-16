import React from 'react'
import './Conversation.css'
import { useEffect, useState } from 'react'
import noProfile from '../../asset/noProfile.png'
import { axiosInstance } from '../../config'

const Conversation = ({c, id, onClick}) => {
  const [friendData, setFriendData] = useState('')
  const friendId = c.members.filter(key => key !== id)
  const URL = '/users/?userId='.concat(friendId[0])

  useEffect(() => {
    const getFriend = async () => {
      const friend = await axiosInstance.get(URL)
      setFriendData(friend.data)
    }
    getFriend()
  })

  return (
    <div className='conversation'>
        <img onClick={onClick}  src={friendData.pic || noProfile} alt="" className="conversationImg" />
        <span className='conversationName'>{friendData.username}</span>
    </div>
  )
}

export default Conversation