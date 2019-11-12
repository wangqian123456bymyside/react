import React from 'react';


export default class Section extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            list: props.data,
        }
    }
    
    render() {
        return (
            <div className="section">
                {
                    this.state.list.map((key,index) => { 
                        return (
                            <dl key={index}>
                            <dt><img src={key.img} alt="图" /></dt>
                            <dd>
                                <p>
                                    <span>{key.name}</span> 
                                    <span>{key.timer}</span>
                                </p>
                                <p>{key.title}</p>
                            </dd>
                        </dl>
                        )
                        
                    })
                }
            </div>
        );
    }
}