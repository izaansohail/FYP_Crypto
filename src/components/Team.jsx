export const Team = (props) => {
  return (
    <div>
      <div style={{paddingLeft:"30%", fontWeight:"bold"}} className='col-md-12 col-md-offset-2 section-title text-start'>
        <h1 style={{color:"black"}}>Meet the Team</h1>
      </div>
    <div id='team'>
      <div className='text-center container'>
        
          {props.data
            ? props.data.map((d, i) => (
            
             <div className='col-md-6 col-sm-6 text-center team'>
              <div className="row" >
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
                </div>
                </div>
               
              ))
            : 'loading'}
        </div>
        </div>
        </div>     
  )
}
