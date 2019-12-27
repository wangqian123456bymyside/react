

export default (state=[],action)=>{
    switch(action.type) {
        case 'get':
            state=action.val
            console.log(action.val)
            let obj={id:'success',list:action.val}
            return obj;
    
        default:
        return state;
    }
}