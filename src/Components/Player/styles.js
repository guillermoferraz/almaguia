import { makeStyles} from '@material-ui/core/styles'                                                                   

const styles = makeStyles({
    iconPlay:{
        color:"rgb(228, 14, 14)",
        width:120,
        height:120,
        "&:hover":{
            opacity:".70",
            cursor:"pointer"
        }
    },
    iconPause:{
        color:"rgba(228, 14, 14,0.4 )",
        width:120,
        height:120,
        "&:hover":{
            opacity:".70",
            cursor:"pointer"
        }
    },
    preloader:{
        position:"absolute",
        left:'45%',
        top:"41.5%",
        zIndex:'200'
    }
    
 })                                                                                                                     
export default styles   
