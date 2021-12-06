export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/tuni-digita.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>À PROPOS DE NOUS </h2>
              <p>{props.data ? <p>TUNISIE DIGITAL accompagne ses clients dans leur  transformation digitale grâce à la réalisation de  communications personnalisées et multicanales</p> : "loading..."}</p>
              <h3>Qui sommes-nous ?</h3>
              <h5>Tunisie Digital est une société de Services Tunisienne avec  pour associés Tunisie Editique à 61% et Diffusion Plus à 39%.</h5>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ?<div><h4>Tunisie Editique</h4><br/>Leader du marketing direct depuis 10 ans en Tunisie. <br />
                      - 10 Millions de Plis/an et plus de 15 Millions de pages imprimées.</div>

                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ?<div><h4>Group Diffusion Plus</h4><br />

                      Leader du marketing direct depuis 30 ans en Europe. <br />
                      - 900 Millions de Plis/an et plus d’un Milliard de pages imprimées, <br />
                      - 50 Millions de messages diffusés/an.</div>
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
