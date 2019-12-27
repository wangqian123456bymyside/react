import React from 'react';
import {NavLink,Route,Switch} from 'react-router-dom'
 import  One from './home'
 import Two from './shequ'
 import Thr from './message'
 import Four from './my'
 import {Icon} from 'antd'
 import {bindActionCreators} from 'redux'
 import {connect} from 'react-redux'
 import * as act from '../actions/ac'
 
 


 
 
 
 



class App extends React.Component {
  
    render(){
    return (
      <div className="HomeBox">  
      <header>
          <div style={{height:"0.5rem"}}>
              <img  style={{width:'100%'}} src="./top.jpg" alt=""/>

          </div>
          <div className="nav">
              <p>
              <span>
              <Icon style={{color:"#fab964",fontSize:'20px'}} type="environment" theme="filled" />
              </span>
              <span>
                  北京
              </span>

              
              </p>
              <p>
                  <input type="text" placeholder="请输入您要找的内容"/>
              </p>

          </div>
      </header>
 
          <section>
              <Switch>
              <Route path='/four' component={Four} /> 
              <Route path='/thr' component={Thr} /> 
              <Route path='/two' component={Two} /> 
              <Route path='/one' component={One} /> 
                  <Route path='/' component={One} /> 
              </Switch>
          </section>
          <footer>
              <dl>
                  <NavLink exact to='/one' className="way">
                  <dt>
                      <img src="./active_home.png" alt=""/>
                  </dt>
                  
                  <dd>首页</dd>
                  </NavLink>
              </dl>
              <dl>
              <NavLink exact to='/two' className="way">
                  <dt>
                      <img src="./community.png" alt=""/>
                  </dt>
                  <dd>社区</dd>
                  </NavLink>
              </dl>
              <dl className="public">
                  <img src="./publish.png" alt=""/>
              </dl>
              <dl>
              <NavLink exact to='/thr' className="way">
                  <dt>
                  <img src="./messages.png" alt=""/>
                  </dt>
                  <dd>消息</dd>
                  </NavLink>
              </dl>
              <dl>
              <NavLink exact to='/four' className="way">
                  <dt>
                  <img src="./my.png" style={{height:'33px'}} alt=""/>
                  </dt>
                  <dd>我的</dd>
                  </NavLink>
              </dl>
          </footer>
         
      </div>
    )
  }
}

export default  connect(
    state=>({
        rede:state.rede
    }),
    dispatch=>{
        return bindActionCreators(act,dispatch)
    }
)(App);
