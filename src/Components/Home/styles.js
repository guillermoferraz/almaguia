import { makeStyles} from '@material-ui/core/styles'                                                                   

const styles = makeStyles({

   
  contentTitle:{
      marginTop:-10
  },
  text1:{
    fontFamily: 'Parisienne, cursive',
    fontSize:38,
    textAlign:'center',
    color:"rgb(199, 200, 138 )",
    "&:hover":{
            color: 'rba(236, 235, 13 )',
            cursor:"pointer",
            textShadow:
                '20px 30px 15px rgba(236, 235, 13 ), 20px 20px 40px rgba(238, 3, 3 ),20px 20px 20px rgba(238, 3, 3 ),20px 20px 40px rgba(38,104,127,1),0 0 80px rgba(236, 235, 13 ),0 0 90px rgba(236, 235, 13 ),0 0 100px rgba(236, 235, 13 ),0 0 140px rgba(38,104,127,1),0 0 180px rgba(236, 235, 13 )',
            }
        },
    shadowText:{
        fontFamily: 'Parisienne, cursive',
        fontSize:38,
        textAlign:'center',
        color:"rgb(199, 200, 138 )",
        cursor:"pointer",
        textShadow:'20px 30px 15px rgba(236, 235, 13 ), 20px 20px 40px rgba(238, 3, 3 ),20px 20px 20px rgba(238, 3, 3 ),20px 20px 40px rgba(38,104,127,1),0 0 80px rgba(236, 235, 13 ),0 0 90px rgba(236, 235, 13 ),0 0 100px rgba(236, 235, 13 ),0 0 140px rgba(38,104,127,1),0 0 180px rgba(236, 235, 13 )',

    },
    containerCube:{
        display:"flex"
    },
    cube1:{
        marginLeft:70
    },
    cube2:{
        marginInlineStart:"auto",
        marginRight:70
    },
    containerPlayer:{
        position:"absolute",
        left:"45%",
        top:"43%"
    }
 })                                                                                                                     
export default styles   

