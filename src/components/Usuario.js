
export default function Usuario() {
    const changeName = () => {prompt("Qual seu nome de usuário?")}


    return (        
            <div class="usuario">
                <img src="assets/img/catanacomics.svg" />
                <div class="texto">
                    <strong>catanacomics</strong>
                    <span>
                        Catana
                        <ion-icon name="pencil" onClick={changeName}></ion-icon>
                    </span>
                </div>
            </div>
        )
}