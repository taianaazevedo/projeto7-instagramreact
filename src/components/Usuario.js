import { useState } from "react"

export default function Usuario() {
    const [nome, setNome] = useState("Catana");
    const [img, setImg] = useState("assets/img/catanacomics.svg")

    function changeName(){
        const resposta = prompt("Qual seu nome de usuário?");
        if(resposta !== ""){
            setNome(resposta);
        } else {
            prompt("Insira um nome válido");
        }  
        
}
    function changeImage(){
        const resposta = prompt("Insira o link de sua imagem de perfil");
        if(resposta !== ""){
            setImg(resposta);
        } else {
            prompt("Insira um link válido");
        } 
    }

    return (        
            <div className="usuario" data-test="user">            
                <img src={img} data-test="profile-image" onClick={changeImage}/>
                <div className="texto">
                    <strong>{nome}</strong>
                    <span data-test="name">
                        {nome}
                        <ion-icon name="pencil" data-test="edit-name" onClick={changeName}></ion-icon>
                    </span>
                </div>
            </div>
        )
}