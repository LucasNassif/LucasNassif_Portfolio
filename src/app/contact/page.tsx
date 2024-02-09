import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Entre em contato</h2>
            </div>
          </div>
          <div className="row">
            {/* item de informação de contato */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Endereço</h4>
              <p>Belo Horizonte, Brasil</p>
            </div>
            {/* final do item de informação de contato */}
            {/* item de informação de contato */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Telefone</h4>
              <p>+55 31 996802815</p>
            </div>
            {/* final do item de informação de contato */}
            {/* item de informação de contato */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>lucassnassifl@gmail.com</p>
            </div>
            {/* final do item de informação de contato */}
          </div>
          {/* Contact Form */}
          <div className="row">
            <form className="contact-form padd-15">
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome*"
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Assunto*"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Digite sua mensagem aqui*"
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button type="submit" className="btn">
                    Enviar Mensagem
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* final formulario de contato */}
        </div>
      </section>
    </>
  );
};

export default Contact;
