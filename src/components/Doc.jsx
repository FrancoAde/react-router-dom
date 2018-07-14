// Documentacion de react

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch          
} from 'react-router-dom'


const Doc = () => (
    
    <Router>
            {/* here's a div */}
        <div>
        {/* here's a Route */}
        <Route path="/tacos" component={Tacos}/>
        </div>
    </Router>
    
)


const Dashboard = () => (<p>Estamos en Dashboard</p>)

const Tacos  = ({ match }) => (
    // here's a nested div
    <div>
      {/* here's a nested Route,
          match.url helps us make a relative path */}
      <Route
        path={match.url + '/carnitas'}
        component={Carnitas}
      />
    </div>
)

const Carnitas = () =>(<h1>CARNITA SECAS</h1>)

export default Doc