const initialState = {
    count : 0,
    clickHistory : '' 
}
function reducer(state,action) {
    if(action.type=='incr') {
        return {
            count : state.count + 1 ,
            clickHistory: state.clickHistory.concat('I')
        }
    }else if (action.type=='decr') {
        return {
            count : state.count -1 ,
            clickHistory : state.clickHistory.concat('D')
        }
    }
    else if (action.type=='reset') {
        return {
            count : 0 ,
            clickHistory : state.clickHistory.concat('R')
        }
    }
}
export {initialState,reducer}