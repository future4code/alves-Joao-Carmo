# Projeto Labeddit

### Surge
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
- Scrolling infinito implementado no Feed, toda vez que o usuário chega ao final da página, ocorre uma requisição de mais posts, assim infinitamente. (react-infinte-scroll)
- Votação nos posts e comentários.
- Criação de posts e comentários.
- Filtro por título ou texto do post.
- Função de Logout.
- Token armazenado no localStorage permite que o usuário reabra o site e continue logado.
- Layout fielmente implementado de acordo com o protótipo.
- Responsivo para desktops.
- Compartilhamento de posts parcialmente implementado. Foi utilizada a biblioteca react-share, que funciona perfeitamente, porém o link compartilhado do post não funciona. (pendente)

### Imagens
![login](https://user-images.githubusercontent.com/22090173/182152059-e110aa06-7d6b-4a62-8ba4-2b9ae836a77f.png)
![signup](https://user-images.githubusercontent.com/22090173/182152071-835361b3-02f1-4777-a87b-eef19cdd5df1.png)
![feed](https://user-images.githubusercontent.com/22090173/182152127-88b2a08d-a89d-4217-a988-bef1b12750a6.png)
![post](https://user-images.githubusercontent.com/22090173/182152082-e880f00b-9a94-4d57-bfd0-c681f21ee648.png)


