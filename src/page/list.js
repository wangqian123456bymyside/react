import React from 'react';
 import axios from 'axios'
 import {Icon, Modal, Button} from 'antd'
 
 
 
 
 



class App extends React.Component {
    constructor (props){
        super(props)
        this.state={
            list:[],
            visible: false,
            land:false
            
        }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };


      showModal1 = () => {
        this.setState({
          visible: false,
          land:true
        });
      };
    
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
          land:false
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
          land:false
          
        });
      };

   componentDidMount(){
    axios.get('./list.json').then((res)=>{
        this.setState({
            list:res.data.data
        })
    })
   }
  
    render(){
        const {id}=this.props.match.params
        const {list}=this.state
        console.log(id,list)
    return (
      <div className="Home"> 
      <header>
      <div style={{height:"0.5rem"}}>
              <img  style={{width:'100%'}} src="./top.jpg" alt=""/>

          </div>


          <div className="hengTop">
              <p><Icon type="arrow-left" /></p>
              <p>公益接单</p>
              <p><Icon  onClick={this.showModal1} type="select" /></p>
          </div>
          </header> 
      <section>
          <div className="bimg">
              <img  src="./b.jpg" alt=""/>
          </div>
          
               {
                   list.map((v,key)=>{
                       if(v.id==id){
                           console.log(v)
                           return (
                            <div key={key} className="tag">
                               <div  className="yuanBox">


                                   <div className="yuan">
                                       <img src={v.avatar} alt=""/>
                                   </div>
                                   <div>
                                       <p>
                                           <span>{v.name}</span>
                                           <span className="find">寻找中</span>
                                       </p>
                                       <p>
                                           {v.title}
                                       </p>
                                   </div>


                               </div>
                               <div className="tagBox">
                                   <p>服务类型</p>
                                   <p>
                                   {
                                     v.serviceType.map((element,key) => {
                                       return (
                                         <span className="job" key={key}>
                                           {element}

                                         </span>
                                       )
                                     })
                                    }
                                   </p>
                               </div>
                               <div className="tagBox">
                                   <p>服务时间</p>
                                   <p>
                                   2019.11.30
                                    {v.startTime}
                                   </p>
                               </div>
                               <div className="tagBox">
                                   <p>结束时间</p>
                                   <p>
                                   2019.11.30
                                    {v.endTime}
                                   </p>
                               </div>
                               <div className="tagBox">
                                   <p>北京市通州区马驹桥附近永安里地铁永安小区</p>
                                   <p>
                                   <Icon type="environment"  />
                                   </p>
                               </div>
                               <div className="tagBox">
                                   <p>服务对象</p>
                                   <p>
                                     
                                    {v.name}
                                   </p>
                               </div>
                               <div className="tagBox">
                                   <p>性别</p>
                                   <p>
                                   {v.sex===1?"男":"女"}
                                   </p>
                               </div>
                               <div className="tagBox">
                                   <p>年龄</p>
                                   <p>
                                   {v.age}
                                   </p>
                               </div>

                               </div>

                           )
                       }
                   })
               }
      
          <div>
              <img style={{width:'100%'}} src="./bot.jpg" alt=""/>
          </div>
      </section>
      
      <div className="bot">
          <p>
          <span>
              预计可得<b style={{color:"red",fontSize:'18px'}}>80</b>个感恩宝
        </span>    
          </p>
          <p onClick={this.showModal}>
              <img style={{height:'1rem'}} src="./jie.jpg" alt=""/>
          </p>
      </div>
      <Modal
          title=""
          style={{position:this.state.land?"fixed":"",bottom:this.state.land?0:''}}
          visible={this.state.visible?this.state.visible:this.state.land}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
           <img style={{display:this.state.visible?'block':'none',width:'100%'}} src="./2.jpg" alt=""/>
           <img  style={{display:this.state.land?'block':'none',width:'100%'}} src="./di.jpg" alt=""/>
        </Modal>
      </div>
    )
  }
}

export default  App;
