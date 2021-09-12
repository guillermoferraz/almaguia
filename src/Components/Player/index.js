import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types'
//components
import Preloader from '../Preloader'
//styles
import { useTheme } from '@material-ui/core/styles'                                                                    
import useMediaQuery from '@material-ui/core/useMediaQuery'             
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import styles from './styles'

const Player = ({activeSound, setActiveSound, activeShadow, setActiveShadow}) => {
    
    const theme = useTheme()                                                                                           
    const mobile = useMediaQuery(theme.breakpoints.down('sm'))                                                         
    const classes = styles({ mobile: mobile })   

    console.log('Active shadow player:',activeShadow)

    const handlePlay = () => {
     const  player = document.getElementsByTagName("audio")[0];
      try{
        if(!activeSound){
            player.play()
            setActiveSound(!activeSound)
            setActiveShadow(!activeShadow)
        }else if(activeSound){           
            player.pause()
            setActiveSound(!activeSound)
            setActiveShadow(activeShadow)
        }
      }catch(err){
          console.log(err)
      }
    }
 
   
    return (
        <div>
           <div className={classes.preloader}>
           </div>
            <div className={classes.containerBtn}>
                {!activeSound ? 
                    <div className={classes.playBtn}>
                        <PlayCircleOutlineIcon 
                            className={classes.iconPlay}
                            onClick={()=> handlePlay()}
                            />
                    </div>
                    : 
                    <div className={classes.pauseBtn}>
                        <PauseCircleOutlineIcon
                             
                            className={classes.iconPause}
                            onClick={()=> handlePlay()}
                            />
                    </div>
                }
                
            </div>

            <audio style={{display:"none"}} src="https://streaming1.hostingmontevideo.com/8034/" preload="none"  controls></audio> 
        </div>
    )
}
Player.propTypes = {
    activeSound: PropTypes.bool,
    setActiveSound: PropTypes.func,
    activeShadow: PropTypes.bool,
    setActiveShadow: PropTypes.func
}

export default Player