import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deletetodo, edit } from "../redux/action";
export const List=()=>{
    let dispatch=useDispatch();
    const change=(e)=>{
        dispatch(edit(e.target.parentElement.id));
    }
    const del=(e)=>{
        dispatch(deletetodo(e.target.parentElement.id));
    }
    let i=0;
    let item=useSelector(state=>state.todo);
    
    return <>{item.map(el=><div key={i++} id={el.id}>
        {i>0?<span>{i}.  </span>:null}
        {i>0?<span><b>Title:  </b>{el.title}</span>:null}
      {i>0?<span style={{margin:"2%"}}> <b>Status</b>:  {el.status.toString()}</span>:null}
      {i>0?<button style={{margin:"2%"}} onClick={change}>Mark Completed</button>:null}
      {i>0?<button style={{margin:"2%"}}onClick={del}>Delete</button>:null}
    </div>)}</>
}