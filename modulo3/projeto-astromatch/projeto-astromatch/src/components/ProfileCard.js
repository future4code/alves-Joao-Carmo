import React from 'react'
import styled from 'styled-components'

const ProfileImg = styled.img`
width: 20vw;
height: 30vh;`

export default function ProfileCard({profile, getProfile}) {
  return (
    <div>
        <ProfileImg src={profile.photo} alt={profile.photo_alt} />
        <p>Nome: {profile.name}</p>
        <p>Idade: {profile.age}</p>
        <p>Bio: {profile.bio}</p>
        <button onClick={getProfile}>Próximo Perfil</button>
    </div>
  )
}
