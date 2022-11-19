export default function Post() {
    const post = [
        { imgUser: "assets/img/meowed.svg", userName: "meowed", photo: "assets/img/gato-telefone.svg", likedBy: "assets/img/respondeai.svg", text1: "respondeai", text2: "101.523" },
        { imgUser: "assets/img/barked.svg", userName: "barked", photo: "assets/img/dog.svg", likedBy: "assets/img/adorable_animals.svg", text1: "adorable_animals", text2: "99.159" }
    ]

    return (
        <>
            {post.map(post => <EachPost imgUser={post.imgUser} userName={post.userName} photo={post.photo} likedBy={post.likedBy} text1={post.text1} text2={post.text2} />)}
        </>
    )
}


function EachPost(props) {
    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUser} data-test="post-image" />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.photo} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline" data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline" data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likedBy} />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.text1}</strong> e <strong> outras {props.text2} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}