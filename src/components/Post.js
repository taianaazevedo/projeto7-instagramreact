import { useState } from "react";


export default function Post() {
    const post = [
        { imgUser: "assets/img/meowed.svg", userName: "meowed", photo: "assets/img/gato-telefone.svg", likedBy: "assets/img/respondeai.svg", text1: "respondeai", text2: 101523 },
        { imgUser: "assets/img/barked.svg", userName: "barked", photo: "assets/img/dog.svg", likedBy: "assets/img/adorable_animals.svg", text1: "adorable_animals", text2: 99159 }
    ]

    return (
        <>
            {post.map(post => <EachPost imgUser={post.imgUser} userName={post.userName} photo={post.photo} likedBy={post.likedBy} text1={post.text1} text2={post.text2} />)}
        </>
    )
}


function EachPost(props) {

    const [save, setSave] = useState("bookmark-outline");
    const [liked, setLiked] = useState("heart-outline");
    const [color, setColor] = useState("");
    const [countLikes, setCountLikes] = useState(props.text2);

    /* função que marca ou desmarca como salvo */
    function savePost() {
        if (save === "bookmark-outline") {
            setSave("bookmark");
        } else {
            setSave("bookmark-outline");
        }
    }

    
    /* função que dá like ou tira o like do post e soma ou subtrai o like*/
    function likePost() {
        if (liked === "heart-outline") {
            setLiked("heart");
            setColor("red");
            setCountLikes(countLikes + 1);
        } else {
            setLiked("heart-outline");
            setColor("");
            setCountLikes(countLikes - 1);
        }
        
    }

  
    /* função que dá like clicando 2x na foto */
    function doubleClick(event) {
        if (event.detail === 2) {
            setLiked("heart");
            setColor("red");
            setCountLikes(countLikes + 1);
        }
    };


    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.imgUser} />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={props.photo} onClick={doubleClick} data-test="post-image" />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name={liked} style={{color: color }} onClick={likePost} data-test="like-post"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name={save} onClick={savePost} data-test="save-post"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likedBy} />
                    <div className="texto" data-test="likes-number">
                        Curtido por <strong>{props.text1}</strong> e <strong> outras {countLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}