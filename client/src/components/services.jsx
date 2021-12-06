export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>NOS CLIENTS & PARTENAIRES</h2>
          <p>
          UN TOTAL DE 65 Millions de documents générés/an <br />
          CANAUX : Editique / Archivage/ Coffre-fort 

          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <img src={d.img} alt='....' className='eeee'/>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
