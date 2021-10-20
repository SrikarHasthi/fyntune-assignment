import { AREA_FILTER } from "../constants";

let areaFilterReducer=(state="NONE",action)=>{
    switch(action.type){
        case AREA_FILTER:
            return action.payload;
            default:
                return state;
    }
}
export default areaFilterReducer;