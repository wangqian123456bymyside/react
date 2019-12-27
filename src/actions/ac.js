import axios from 'axios'

export const getData=(val)=>{
    return {
        type:'get',
        val
    }
}



export const fetData=()=>{
    return (dispatch)=>{
           axios.get('./home.json').then((res)=>{
               console.log(res.data.data)
               dispatch(getData(res.data.data))
          
            })
    }
}