export default function Sugestoes() {
    const sugestao = [
        { imgSugest: "assets/img/bad.vibes.memes.svg", nameSugest: "bad.vibes.memes" },
        { imgSugest: "assets/img/chibirdart.svg", nameSugest: "chibirdart" },
        { imgSugest: "assets/img/razoesparaacreditar.svg", nameSugest: "razoesparaacreditar" },
        { imgSugest: "assets/img/adorable_animals.svg", nameSugest: "adorable_animals" }
    ]
    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestao.map(sugest => <Sugestao img={sugest.imgSugest} user={sugest.nameSugest}/>)}
        </div>
    )
}

function Sugestao(props){
    return(
        <div className="sugestao">
                <div className="usuario">
                    <img src={props.img} />
                    <div className="texto">
                        <div className="nome">{props.user}</div>
                        <div className="razao">Segue você</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>
    )
}