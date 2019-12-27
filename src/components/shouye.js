import React from 'react';

 import { Icon } from 'antd'
 import axios from 'axios'

 
 
 



class App extends React.Component {
    constructor (props){
        super(props)
        this.state={
            list:[],
            get:false
        }
    }

    componentDidMount (){    


           axios.get('./food.json').then((res)=>{
            this.setState({
                list:res.data.list,
                
            })
            })
    }

    onScroll = (e) => {
        localStorage.setItem("scroll",e.target.scrollTop)
        let {get}=this.state
        let sec = document.querySelector('.section')
        console.log(sec.scrollTop)
        if(localStorage.getItem('scroll')){
            sec.scrollTop = localStorage.getItem('scroll')
            if(sec.scrollTop>210){
                get=true
                 

            }else{
                get=false
            }
           }
           this.setState({            
            get:get
        })
     }
  
    render(){
        const {list,get}=this.state

    return (
      <div className="HomeBox">  
       <div className='top' style={{background:get?"white":"",color:get?"#06c1b0":"#ffff"}}>
           <p><Icon style={{fontSize:"29px"}} type="left" /></p>
           <p className="searchBox" style={{background:get?"#cecece":"white"}}>
               <span  ><Icon style={{color:"#8e8e94",fontSize:"20px"}}  type="search" /></span>
              <span> <input style={{background:get?"#cecece":"white"}} id="in" type="text" placeholder="输入商家名、品类或商圈"/></span>
           </p>
           <p><Icon style={{fontSize:"29px"}} type="user" /></p>

           
       </div>
      
       <section className="section" onScroll = {this.onScroll}>
       <img src="./file.png" style={{width:'100%'}}  alt=""/>
           <div className="nav">        
            
            <div className="dlss">
               <dl>
                   <dt>
                       <img src="./h1.jpg" alt=""/>

                   </dt>
                    <dd>火锅</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h2.jpg" alt=""/>
                   </dt>
                   <dd>甜点饮品</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h3.jpg" alt=""/>
                   </dt>
                   <dd>自助餐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h4.jpg" alt=""/>
                   </dt>
                   <dd>小吃快餐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h5.jpg" alt=""/>
                   </dt>
                   <dd>西餐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h6.jpg" alt=""/>
                   </dt>
                   <dd>烧烤烤肉</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h7.jpg" alt=""/>
                   </dt>
                   <dd>香锅烤鱼</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./h8.jpg" alt=""/>
                   </dt>
                   <dd>海鲜</dd>
               </dl>
               
            </div>
    
 
           </div>
           <p style={{height:'20px'}}></p>
           <div className="navtop" style={{position:get?"fixed":"",top:get?"1rem":""}}>
               <p>
                   <span>全部类目</span>
                   <span><Icon type="caret-down" /></span>
               </p>
               <p>
                   <span>附近商家</span>
                   <span><Icon type="caret-down" /></span>
               </p>
               <p>
                   <span>智能排序</span>
                   <span><Icon type="caret-down" /></span>
               </p>
               <p>
                   <span>筛选</span>
                   <span><Icon type="caret-down" /></span>
               </p>

           </div>
       
           {
               list.map((v,key)=>{
                   return (
                       <div key={key}>

                       <dl  className="kk">
                        <dt>   <img  className="img" src={v.frontImgUrl} alt=""/></dt>
                        <dd>
                            <p style={{fontSize:'18px',marginBottom:0}}>{v.name}</p>
                            <p className="f" style={{marginBottom:0}}>
                                <span>
                                <span> <img src="./xx.jpg" alt=""/> </span>
                                <span>￥{v.price}/人</span>
                                </span>
                                <span className="sell">万柳 359m</span>
                        
                            </p>
                            <p style={{marginBottom:0}}>快餐</p>
                            <p style={{color:"#39c3ab"}}>支持外卖</p>
                           
                        </dd>
                       </dl>
                       <img src="./w.jpg"  style={{width:'100%',marginBottom:0}}   alt=""/>
                       </div>
                   )
               })
           }
       </section>
      </div>
    )
  }
}

export default App;