import React from 'react'
import styled from 'styled-components'

export default function Header({ appSwitcher, activeComponent }) {
    return (
        <div>
            <h1>AstroMatch</h1>
            {(activeComponent === 'profiles') ? 
            <button onClick={() => appSwitcher('matches')}>Ir para Matches</button> : 
            <button onClick={() => appSwitcher('profiles')}>Voltar para Perfis</button>}
            <hr></hr>
        </div>
    )
}
