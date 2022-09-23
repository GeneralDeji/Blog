import React from 'react'
import './Show.css'
import Hands from '../Project Imgs/Rectangle 5.png'
import Road from '../Project Imgs/Rectangle 5-1.png'
import System from '../Project Imgs/Rectangle 5-2.png'

const Show = () => {
  return (
    <div className='show'>

        <div className='cards'>
            <div className='first-div'>
                <img src={Hands} alt="" />
            </div>

            <div className='scnd-div'>
                <div>
                    <p>Lifestyle</p>
                </div>

                <div>
                    <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
                </div>
            </div>
        </div>

        <div className='middle cards'>
            <div className='first-div'>
                <img src={Road} alt="" />
            </div>

            <div className='scnd-div'>
                <div>
                    <p>Nature</p>
                </div>

                <div>
                    <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
                </div>
            </div>
        </div>

        <div className='last cards'>
            <div className='first-div'>
                <img src={System} alt="" />
            </div>

            <div className='scnd-div'>
                <div>
                    <p>Technology</p>
                </div>

                <div>
                    <p>The 20 Biggest Fashion Companies In Nigeria 2022</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Show