import {useState} from 'react'

function Post({ nomeUsuario, fotoPost, fotoUsuario }) {
    const [curtido, setCurtido] = useState(false);
    const [numeroCurtidas, setNumeroCurtidas] = useState(0);
    const [comentando, setComentando] = useState(false);
    const [numeroComentarios, setNumeroComentarios] = useState(0);
    const [comentarios, setComentarios] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const onClickCurtida = () => {
        setCurtido(!curtido)
        setNumeroCurtidas(1)
        if (numeroCurtidas === 1) {
            setNumeroCurtidas(0)
        }
    };

    const onClickComentario = () => {
        setComentando(!comentando)
    };

    const onChangeComentario = (event) => {
        setInputValue(event.target.value)
    };

    const enviarComentario = (comentario) => {
        setComentarios([...comentarios, inputValue])
        setComentando(false)
        setNumeroComentarios(numeroComentarios + 1)
    };

    const caixaDeComentario = comentando ? (
        <>
            <label htmlFor={"comentario"} >Comente: </label>
            <input
                id={"comentario"}
                onChange={onChangeComentario}
            />
            <button onClick={enviarComentario}>Enviar</button>
        </>
    ) : (
        comentarios.map((comentario, index) => {
          return (
            <div key={index}>
              <p>{comentario}</p>
            </div>
          )
        })
    );

    return (
        <main>
            <header>
                <figure>
                    <img src={fotoUsuario} alt={'Imagem do usuario'} />
                    <span>{nomeUsuario}</span>
                </figure>
            </header>
            <hr />
            <main>
                <figure>
                    <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
                    <img src={fotoPost} alt={'Imagem do post'} />
                </figure>
            </main>
            <hr />
            <footer>
                <section>
                    <span>Número de curtidas: {numeroCurtidas}</span>
                    <button onClick={onClickCurtida}>
                        {!curtido ? "Like" : "Dislike"}
                    </button >
                </section>
                <section>
                    <span>Número de comentários: {numeroComentarios}</span>
                    <button onClick={onClickComentario}>
                        {comentando ? "Fechar comentário" : "Adicionar comentário"}
                    </button>
                    <h4>Comentários</h4>
                    {caixaDeComentario}
                </section>
            </footer>
        </main>
    );
};

export default Post;