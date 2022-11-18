export default function Sugestoes() {
    const sugestao = [
        { imgSugest: "assets/img/bad.vibes.memes.svg", nameSugest: "bad.vibes.memes" },
        { imgSugest: "assets/img/chibirdart.svg", nameSugest: "chibirdart" },
        { imgSugest: "assets/img/razoesparaacreditar.svg", nameSugest: "razoesparaacreditar" },
        { imgSugest: "assets/img/adorable_animals.svg", nameSugest: "adorable_animals" }
    ]
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestao.map(sugest => <Sugestao img={sugest.imgSugest} user={sugest.nameSugest}/>)}
        </div>
    )
}

function Sugestao(props){
    return(
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.img} />
                    <div class="texto">
                        <div class="nome">{props.user}</div>
                        <div class="razao">Segue você</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>
    )
}