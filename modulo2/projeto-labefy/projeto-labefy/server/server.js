const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirect_uri: 'http://localhost:3000/',
        clientId: '99573a5c6de44a92aaaaa437ffb6599d',
        clientSecret: '6bba2140dde34161b896e91903ab1058'
    })

    spotifyApp
        .authorizationCodeGrant(code)
        .then(data => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            })
        }).catch(() => {
            res.sendStatus(400)
        })
})