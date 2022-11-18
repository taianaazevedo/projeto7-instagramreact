export default function Post() {
    const post = [
        {imgUser: "assets/img/meowed.svg" , userName: "meowed", photo: "assets/img/gato-telefone.svg" , likedBy: "assets/img/respondeai.svg" , text:"Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>"},
        {imgUser: "assets/img/barked.svg", userName: "barked", photo:"assets/img/dog.svg" , likedBy:"assets/img/adorable_animals.svg" , text:"Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>"}
    ]

    return (
        <div>
            <div class="post">
            {post.map(post => <EachPost imgUser={post.imgUser} userName={post.userName} photo={post.photo} likedBy={post.likedBy} text={post.text}/>)}
            </div>                  
        </div >
    )
}

function EachPost(props){
    return(
        <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={props.imgUser} />
                        {props.userName}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src={props.photo} />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon name="heart-outline"></ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src={props.likedBy} />
                        <div class="texto">
                            {props.text}
                        </div>
                    </div>
                </div>
            </div>
    )
}