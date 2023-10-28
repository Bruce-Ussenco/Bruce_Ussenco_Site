function Home() {
    return (
        <div className="container">
          <h1>Portifólio</h1>

          <h2>1.Campo Minado</h2>

          <img src="/images/campo-minado.png" alt="Meu campo minado"></img>

          <p>Clique&nbsp;
            <a className="link"
            href="https://editor.p5js.org/bruceussenco/sketches/9xeI-rtLF"
            title="Campo Minado"
            target="_blank">
                aqui
            </a>.
          </p><br></br>

          <h2>2.Fogo de DOOM</h2>

          <p>Clique&nbsp;
            <a className="link"
            href="https://editor.p5js.org/bruceussenco/sketches/PeTzOGR7F"
            title="Doom Fire"
            target="_blank">
                aqui
            </a>.
          </p>

          <style jsx>{`
            .container {
                margin: 25px;
            }
            .link {
                color: blue;
            }
        `}</style>
        </div>
        
    )
}

export default Home;