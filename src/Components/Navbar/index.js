import React from 'react'

//styles                                                                                                               
import { useTheme } from '@material-ui/core/styles'                                                                    
import useMediaQuery from '@material-ui/core/useMediaQuery'                                                            
import styles from './styles'   



const Navbar = () =>{
  const theme = useTheme()                                                                                           
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))                                                         
  const classes = styles({ mobile: mobile })   

  return (
    <div className={classes.root}>
     <div className={classes.gradientBorder}>
     <div className={classes.contentItems}>
     <p className={classes.item}>{'Servicios'}</p>
     <p className={classes.item} >{'Sobre Nosotros'}</p>
     <p className={classes.item}>{'Contacto'}</p>
    </div>
    <p className={classes.border}><span className={classes.line}>dsadsadsa</span></p>
     </div>
    </div>
  )
}


export default Navbar;
