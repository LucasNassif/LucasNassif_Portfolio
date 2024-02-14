import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Sobre mim</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    Me chamo Lucas Nassif sou <span>graduando em Sistemas de Informação</span>
                  </h2>
                  <p>
                    Olá! Meu nome é Lucas Nassif. Sou estudante de Sistemas de Informação
                    na Puc Minas, desde o ínicio de 2023. Estudo programação já tem alguns anos, 
                    mas somente em 2023 comecei a me dedicar exclusivamente a área de desenvolvimento.
                    Tenho realizado alguns cursos extracurriculares para obter ainda mais conhecimento,
                    visto que desejo me tornar um programador. Alguns dos meus conhecimentos são em Java, Html, Css,
                    JavaScript, React, entre outros...
                    Desejo conseguir uma vaga de desenvolvedor junior, ou estágio na área, para
                    que eu possa adquirir mais conhecimento e me tornar cada vez melhor na àrea.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>lucassnassifl@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Escolaridade : <span>Ensino Superior </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Telefone : <span>+55 31 996802815</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Cidade : <span>Belo Horizonte</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="public\docs\resume.pdf"
                        className="btn"
                        download={""}
                      >
                        Download CV
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>jAVASCRIPT</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JAVA</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Formação</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* item da timeline */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 08/2023 até o presente
                          </h6>
                          <h4 className="timeline-title">
                          Graduação de Sistemas de Informação
                            
                          </h4>
                          <p className="timeline-text">
                          Desde o primeiro semestre de 2023 faço o curso de sistemas
                          de informação na PUC minas. 
                          </p>
                        </div>
                        {/* final do item da timeline */}
                        {/* item da timeline */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 10/2023 a 02/2024
                          </h6>
                          <h4 className="timeline-title">
                          Formação Java Developer
                          </h4>
                          <p className="timeline-text">
                          Realizei o curso de formação em Java, com carga horária de 76h, pela
                            plataforma da DIO (Digital Innovation One). Neste curso aprendi sobre a linguagem java e suas
                            funcionalidades. 
                          
                          </p>
                        </div>
                        {/* final do item da timeline */}
                        {/* item da timeline */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 01/2018 a 12/2022
                          </h6>
                          <h4 className="timeline-title">
                            Graduação em Direito
                          </h4>
                          <p className="timeline-text">
                            No ano de 2017 iniciei minha primeira graduação, sendo ela em Direito, sendo então finalizada 
                            no ano de 2022. Nos dias de hoje não atuo mais na área, pois estou transicionando para a área de
                            tecnologia.
                          </p>
                        </div>
                        {/* final do item da timeline */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experiencias</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* item da timeline */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 08/2023 até o presente
                          </h6>
                          <h4 className="timeline-title">Auxiliar de Suporte Técnico</h4>
                          <p className="timeline-text">
                            Desde o mês de Outubro de 2023 atuo realizando o suporte N1 na empresa
                            CmosDrake Equipamentos Hospitalares, lidando com demandas dos usuários
                            internos. 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
