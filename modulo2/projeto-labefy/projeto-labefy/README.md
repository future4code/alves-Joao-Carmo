# Projeto Labefy

### Aluno
João Gabriel Colodetti do Carmo

### Sobre
O projeto permite ao usuário criar playlists em uma api da labenu e adicionar músicas pesquisadas diretamente da api do Spotify.
Desenvolvido com React e utilizando algumas bibliotecas extras, como um componente de Player do Spotify "react-spotify-web-playback", axio e styled-components.

### Instruções

Ao clicar em login, o usuário será redirecionado para a página de autenticação do Spotify. Realizada a devida autorização, note que, apesar de voltar pra tela de Login
a url do browser agora contém um #access_token, que será utilizado para realizar as interações com a API do Spotify, ele tem duração de 60 minutos, portanto caso expire,
volte para a tela de login e gere outro clicando no botão novamente.
Com o token gerado, o usuário pode criar playlists e acessá-las no menu Biblioteca.
Dentro da página da playlist, estará disponível um campo de busca, que recebe músicas/artistas diretamente do Spotify, com a opção de adicioná-las à playlist.
Uma vez que a música é adicionada, ela pode ser reproduzida com o player renderizado nessa mesma tela, basta clicar n faixa escolhida.

### O que não funciona

Ainda não foi adicionada a opção de remover músicas de uma playlist (em desenv)
Ao clicar em Login, o usuário não é redirecionado para a Home.
Usuários que desejem testar o projeto, devem fornecer o e-mail cadastrado no spotify antes.
Estilização incompleta.
Não é responsivo para celulares.


### Imagens

![foto1](https://user-images.githubusercontent.com/22090173/175938103-aeb8b991-4131-450f-ad85-8d87a05eedc9.png)
![foto2](https://user-images.githubusercontent.com/22090173/175938395-dcba1156-6b1f-4d99-a20a-f76b2d6da65b.png)
![foto3](https://user-images.githubusercontent.com/22090173/175938415-3fee05d0-840c-487b-aa38-fc8d76b9010b.png)



