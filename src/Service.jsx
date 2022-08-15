import React from 'react'
import Sdata from './Sdata';
import Card from './Card';

const Service = () => {
  return (
    <>
      <h2 className='text-center'>
        Our Services
      </h2>
      <div className='my-2'>

        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-4'>

                {
                  Sdata.map((val, index) => {
                    return <Card key={index}
                      imgsrc={val.imgsrc}
                      title={val.title}
                      />
                  })
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service;
