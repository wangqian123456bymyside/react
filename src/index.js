import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'
import Head from "./pages/head"
import Section from "./pages/section"
import Foot from "./pages/foot"

let data = []
//请求json数据
axios.get('data.json').then(res => {
    data = res.data.info
    //获取到数据后渲染传参
    xuan (data)
})

//渲染封装
function xuan (data) {
    ReactDOM.render(
        <div className="box">
            <Head />
            <Section data = {data} />
            <Foot  />
        </div>,
        document.getElementById('root')
    );
}



