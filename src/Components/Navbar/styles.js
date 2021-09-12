import { makeStyles} from '@material-ui/core/styles'                                                                   

const styles = makeStyles({ 
  root:{
      backgroundColor:"rgba(0,0,0,0.4)",
      position:"relative",
      zIndex:99,
      top:0
  },   
  contentItems:{
    display:"flex",
    justifyContent:"flex-end",
    positon:'relative',
    zIndex:'100'
  },
  line:{
    color:"transparent"
  },
  border:{
    color:'white',
    height:"90px",
    marginTop:"-65px",
    position:"relative",
    zIndex:"80",
    fontFamily: 'Bad Script, cursive',
    fontSize:1,
    marginLeft:10,
    marginRight:10,
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(currentColor, currentColor)',
    backgroundPosition:'0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size .3s',
    '&:hover, &:focus ':{
      backgroundSize: '100% 2px',
      opacity:'.75'
    },
                         
  },
  item:{
    color:'white',
    positon:'relative',
    zIndex:'100',
    fontFamily: 'Bad Script, cursive',
    fontSize:20,
    marginLeft:10,
    marginRight:10,
    textDecoration: 'none',
    backgroundImage: 'linear-gradient(currentColor, currentColor)',
    backgroundPosition:'0% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0% 2px',
    transition: 'background-size .3s',
    '&:hover, &:focus ':{
      backgroundSize: '100% 2px',
      opacity:'.75',
      cursor:'pointer'
    },
  }                                                                                      
 })                                                                                                                     
export default styles   

