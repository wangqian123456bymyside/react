import React from 'react';
 import {bindActionCreators} from 'redux'
 import {connect} from 'react-redux'
 import {Icon} from 'antd'
 import * as act from '../actions/ac'
 import { Carousel } from 'antd';
 import {NavLink,withRouter} from 'react-router-dom'
 
 
 
 
 



class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      showmodel:true,
      qi:false,
      w:false
    }
  }

  componentDidMount(){
      this.props.fetData()
  }

   btns=()=>{
    let { showmodel,qi,w}=this.state
    if(showmodel===false){
      showmodel=true
      qi=false
      w=false
    } 
    this.setState({
      showmodel:showmodel,
      qi:qi,
      w:w

    })
   }
   qibtn=()=>{
    let { showmodel,qi,w}=this.state
    if(qi===false){
      qi=true
      showmodel=false
      w=false
    } 
    this.setState({
      showmodel:showmodel,
      qi:qi,
      w:w

    })
   }
   wbtn=()=>{
    let { showmodel,qi,w}=this.state
    if(w===false){
      w=true
      showmodel=false
      qi=false
    } 
    this.setState({
      showmodel:showmodel,
      qi:qi,
      w:w

    })
   }
    render(){
       
        const {rede}=this.props
        console.log(rede)
        const { showmodel,qi,w}=this.state
        
    return (
      <div className="Home">  
      <div className="lunBox">
      <Carousel autoplay>
    
        
      <div className="wat">
    <img src="https://sky300.oss-cn-beijing.aliyuncs.com/banner/01.jpg" alt=""/>
      </div>
      <div className="wat">
    <img src="https://sky300.oss-cn-beijing.aliyuncs.com/banner/02.jpg" alt=""/>
      </div>
      <div className="wat">
    <img src="https://sky300.oss-cn-beijing.aliyuncs.com/banner/03.jpg" alt=""/>
      </div>
      <div className="wat">
    <img src="https://sky300.oss-cn-beijing.aliyuncs.com/banner/01.jpg" alt=""/>
      </div>
           
      
  </Carousel>

      </div>
      <div className="navBox">
          {
              rede.id=='success'?rede.list.honorList.map((v,key)=>{
                  return (
                      <div key={key} style={{background:v.background}}>
                      
                       <img src={v.icon} alt=""/>
                       <span style={{color:"#fff"}}>{v.value}</span>
                      </div>
                  )
              }):<div>暂无数据</div>
          }
      </div>
      <div className="twoBox">
        <div>
          <span>
            <img src="./kf.jpg" alt=""/>
          </span>
          <span style={{color:'#ff8080',marginLeft:'10px'}}>康富商城</span>

        </div>
        <div>
          <span>
            <img src="./zh.jpg" alt=""/>
          </span>
          <span style={{color:'#80d4ff',marginLeft:'10px'}}>账户管理</span>

        </div>
      </div>
      <div className="tabNav">
       <div> <p onClick={this.btns} style={{color: showmodel?'#333':'',borderBottom: showmodel?'2px solid orange':''}}>助人</p></div>
       <div><p onClick={this.qibtn} style={{color: qi?'#333':'',borderBottom: qi?'2px solid orange':''}}>志愿者</p></div>
       <div> <p onClick={this.wbtn} style={{color: w?'#333':'',borderBottom: w?'2px solid orange':''}}>社区驿站</p></div>
       <div> <p >筛选</p></div>
      </div>
      <div className="BoxBig">
        <div style={{display:showmodel?"block":'none'}} className="mainBox">
              {
                 rede.id=='success'?rede.list.taskList.map((v,key)=>{
                   return (
                        
                          v.children.map((item,i)=>{
                            return (
                              <NavLink exact to={'/list'+item.id} className="midBox" key={i}>
                                <div className="right">
                                  <img src={item.avatar} alt=""/>
                                <img className="sex"   src={item.sex===1?'./nan.png':'nv.png'} alt=""/>
                                </div>
                                <div className="left">
                                  <p className="tit">
                                    <span>{item.name}</span>
                                    <span>{item.age}</span>
                                    <span className="find">寻找中</span>
                                    <span>
                                    <Icon type="environment"  />
                                      {item.distance}m
                                    </span>
                                  </p>
                                  <p>
                                   <span style={{marginLeft:'14px'}}> 服务时间:<span>{item.startTime}</span>--<span>{item.endTime}</span></span>
                                  </p>
                                  <p className="description">
                                    {item.description}
                                  </p>
                                  <p className="tit">
                                    {
                                      item.serviceType.map((element,key) => {
                                       return (
                                         <span className="job" key={key}>
                                           {element}

                                         </span>
                                       )
                                     })
                                    }
                                    <span>
                                      预可得<b style={{color:"red",fontSize:'18px'}}>{item.profit}</b>宝
                                    </span>
                                  </p>

                            
                                </div>
                              </NavLink>
                            )
                          })
                        
                   )
                 }):<div>加载中...</div>
              }

        </div>
        <div style={{display:qi?"block":'none'}}>2</div>
        <div style={{display:w?"block":'none'}}>3</div>
      </div>
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
)(withRouter(App));
