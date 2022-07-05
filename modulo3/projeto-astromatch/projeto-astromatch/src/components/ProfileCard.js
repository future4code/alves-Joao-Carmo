import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ProfileImg = styled.img`
width: 20vw;
height: 30vh;`

export default function ProfileCard({profile, getProfile, decisionProfile}) {


  return (
    <div>
        <ProfileImg src={profile.photo} alt={profile.photo_alt} />
        <p>Nome: {profile.name}</p>
        <p>Idade: {profile.age}</p>
        <p>Bio: {profile.bio}</p>
        <button onClick={() => decisionProfile(profile.id, true)}>Like</button>
        <button onClick={() => decisionProfile(profile.id, false)}>Dislike</button>
    </div>
  )
}
