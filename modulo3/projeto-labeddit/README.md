# Projeto Labeddit

### Link
https://white-bird.surge.sh/

### Autor
João Gabriel Colodetti do Carmo

### Sobre
O projeto representa a implementação de uma rede social (nesse caso inspirada no Reddit), 100% funcional. O site foi desenvolvido utilizando ReactJS, seguindo o conceito de Mobile First e um layout pré-determinado. Na página de login, o usuário pode acessar um local de criação de conta, caso não tenha uma, e em seguida acessar o conteúdo do site. Ao logar, o feed de posts fica disponível, assim como a funcionalidade de criar novos posts, votar a favor ou contra determinado post (upvote e downvote), além de poder acessar uma página somente do post especifico, onde estarão disponiveis os comentários, que também podem receber votos.
No feed também é possivel pesquisar por títulos ou texto contido nos posts. Por fim, é possível compartilhar um post específico em outras redes sociais (Facebook, Twitter e WhatsApp).

### Funcionalidades
- Criação de contas e autenticação de Login utilizando API.
- Validação de formulários customizada.
- Estilização feita com ChakraUi.
- Scrolling infinito implementado no Feed, toda vez que o usuário chega ao final da página, ocorre uma requisição de mais posts, assim infinitamente. (useInfiniteScroll)
- Votação nos posts e comentários.
- Criação de posts e comentários.
- Filtro por título ou texto do post.
- Função de Logout.
- Token armazenado no localStorage permite que o usuário reabra o site e continue logado.
- Layout fielmente implementado de acordo com o protótipo.
- Responsivo para desktops.
- Compartilhamento de posts parcialmente implementado. Foi utilizada a biblioteca react-share, que funciona perfeitamente, porém o link compartilhado do post não funciona. (pendente)

### Imagens
![login](https://user-images.githubusercontent.com/22090173/182082717-1f03ccfe-2fa1-4308-8ed0-afea6e23d5bf.png)
![signup](https://user-images.githubusercontent.com/22090173/182082725-f0d43893-58ea-4f90-be79-e5979ca251be.png)
![feed](https://user-images.githubusercontent.com/22090173/182082737-14e33917-37e7-406b-8d82-888e2ba1a9aa.png)
![post](https://user-images.githubusercontent.com/22090173/182082768-13a9c4ce-4825-4ca5-a92b-2f1183d06cac.png)

