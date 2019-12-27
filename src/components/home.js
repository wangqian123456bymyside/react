import React from 'react';

 import { Carousel,Icon } from 'antd'
 import axios from 'axios'

 
 
 



class App extends React.Component {
    constructor (props){
        super(props)
        this.state={
            list:[]
        }
    }

    componentDidMount (){
        axios.get('./food.json').then((res)=>{
        this.setState({
            list:res.data.list
        })
        })
    }
  mei=()=>{
      this.props.history.push('/meishi')
  }
    render(){
        const {list}=this.state

    return (
      <div className="HomeBox">  
      <header>
       <p>
           <span>北京</span>
           <span><Icon type="down" /> </span>
       </p>
       <p>
           <input type="text" placeholder="请输入商家名,品类或者商圈..." />
       </p>
       <p>
       <Icon style={{fontSize:'30px'}} type="user" />  
       </p>
    
      </header>
      <img src="./e.jpg" style={{width:'100%'}}  alt=""/>
       <section>
           <div className="nav">
           <Carousel autoplay={false}>
           <div className="dls">
               <dl onClick={this.mei}>
                   <dt>
                       <img src="./1.jpg" alt=""/>

                   </dt>
                    <dd>美食</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./2.jpg" alt=""/>
                   </dt>
                   <dd>猫眼电影</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./3.jpg" alt=""/>
                   </dt>
                   <dd>酒店</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./4.jpg" alt=""/>
                   </dt>
                   <dd>休闲娱乐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./5.jpg" alt=""/>
                   </dt>
                   <dd>外卖</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./6.jpg" alt=""/>
                   </dt>
                   <dd>KTV</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./7.jpg" alt=""/>
                   </dt>
                   <dd>周边游</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./8.jpg" alt=""/>
                   </dt>
                   <dd>丽人</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./9.jpg" alt=""/>
                   </dt>
                   <dd>小吃快餐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./10.jpg" alt=""/>
                   </dt>
                   <dd>生活服务</dd>
               </dl>
            </div>
            <div className="dls">
               <dl>
                   <dt>
                       <img src="./10.jpg" alt=""/>

                   </dt>
                    <dd>旅游</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./2.jpg" alt=""/>
                   </dt>
                   <dd>猫眼电影</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./3.jpg" alt=""/>
                   </dt>
                   <dd>酒店</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./4.jpg" alt=""/>
                   </dt>
                   <dd>休闲娱乐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./5.jpg" alt=""/>
                   </dt>
                   <dd>外卖</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./6.jpg" alt=""/>
                   </dt>
                   <dd>KTV</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./7.jpg" alt=""/>
                   </dt>
                   <dd>周边游</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./8.jpg" alt=""/>
                   </dt>
                   <dd>丽人</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./9.jpg" alt=""/>
                   </dt>
                   <dd>小吃快餐</dd>
               </dl>
               <dl>
                   <dt>
                   <img src="./1.jpg" alt=""/>
                   </dt>
                   <dd>生活服务</dd>
               </dl>
            </div>
    
  </Carousel>
           </div>
           <p style={{height:'20px'}}></p>
           <div className="guessurlike">猜你喜欢</div>
       
           {
               list.map((v,key)=>{
                   return (
                       <dl key={key} className="kk">
                        <dt>   <img  className="img" src={v.frontImgUrl} alt=""/></dt>
                        <dd>
                            <p style={{fontSize:'18px',marginBottom:0}}>{v.name}</p>
                            <p>[20店通用]鸡腿堡+薯条+中杯可乐一份</p>
                          <p style={{fontSize:"17px"}} className="f"> <span> <b style={{color:'#ff893a'}}>{v.price}元</b> <span>门市价 ：{v.price}</span></span>
                          <span className="sell">已售:18019</span>
                          </p>
                        </dd>
                       </dl>
                   )
               })
           }
       </section>
      </div>
    )
  }
}

export default App;