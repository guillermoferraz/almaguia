import React, {useState} from 'react'

//components
import Cube from '../Cube'
import Preloader from '../Preloader'

//styles                                                                                                               
import { useTheme } from '@material-ui/core/styles'                                                                    
import useMediaQuery from '@material-ui/core/useMediaQuery'                                                            
import styles from './styles'   


const Home = () =>{
  const theme = useTheme()                                                                                           
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))                                                         
  const classes = styles({ mobile: mobile })   

  const [activeShadow, setActiveShadow] = useState(false)

  console.log('Active shadow home:',activeShadow)

  return (
    <div className={classes.root}>
     <div className={classes.contentTitle}>
        <p className={activeShadow ? classes.shadowText : classes.text1}>{'Alma guía Tarot'}</p>
     </div>
    <div className={classes.containerCube}>
      <div className={classes.cube1}> 
        <Cube/>
      </div>
      <div className={classes.cube2}> 
        <Cube/>
      </div>
    </div>
    <div className={classes.containerPlayer}>
      <Preloader activeSahdow={activeShadow} setActiveShadow={setActiveShadow} />
    </div>

    </div>
  )
}


export default Home;
