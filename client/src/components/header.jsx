export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {"f" ? "tunisie digital" : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? "VOTRE PARTENAIRE VERS UNE NOUVELLE ÉRE DE COMMUNICATION" : 'Loading'}</p>
                <a href='#contact'className='btn btn-custom btn-lg page-scroll'>
                  login
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
