import React, {useState} from 'react'
import PropTypes from 'prop-types'

//components
import Player from '../Player'

//styles 
import './styles.css'

const Preloader = ({activeShadow, setActiveShadow}) => {

    const [activeSound, setActiveSound] = useState(false)

    console.log('Active shadow preloader:',activeShadow)


    return(
        <div className='container'>
            {activeSound ? 
                <div className='preloader'>
                    <Player  activeShadow={activeShadow} setActiveShadow={setActiveShadow}  activeSound={activeSound} setActiveSound={setActiveSound} />
                </div>
                :                 
                <div className='preloader2'>
                    <Player activeShadow={activeShadow} setActiveShadow={setActiveShadow} activeSound={activeSound} setActiveSound={setActiveSound} />
                </div>
            }
          
        </div>
        
    )
}
Preloader.propTypes = {
    activeShadow : PropTypes.bool,
    setActiveShadow: PropTypes.func
}

export default Preloader