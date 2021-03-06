import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Home from './Components/Home'
import Navbar from './Components/Navbar'

//styles                                                                                                               
import { useTheme } from '@material-ui/core/styles'                                                                    
import useMediaQuery from '@material-ui/core/useMediaQuery'                                                            
import styles from './styles'   



const App = () =>{
  const theme = useTheme()                                                                                           
  const mobile = useMediaQuery(theme.breakpoints.down('sm'))                                                         
  const classes = styles({ mobile: mobile })   

    return (
      <Router>
        <div className={classes.root}>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
          </Switch>
        </div>
    </Router>
  );
}


export default App;
