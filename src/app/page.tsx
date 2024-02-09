
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
          {/* imagem da tela de inicio*/}
            <img
              src="/imgs/asda.png"
              alt="lucas nassif profile"
              className="shadow-dark"
            />
            <h1>Lucas Nassif</h1>
            <p>Graduando em Sistemas de Informação</p>

            {/* links para as redes sociais*/}
            <div className="social-links">
              <a href="https://github.com/lucasnassif" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/_lucasnassif/" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/lucasnassif25/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
