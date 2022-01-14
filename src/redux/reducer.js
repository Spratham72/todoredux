import { addTodo, editTodo, removeTodo } from "./constant";

const init={todo:[{id:"",title:"",status:false}]};
let i=1;
export const reducer=(state=init,{type,payload})=>{
    switch(type){
        case addTodo:
            let a= {...state,todo:[...state.todo,{id:i++,title:payload,status:false}]};
            console.log(a)
            return a;
        case editTodo:
            let b={...state,
                todo:state.todo.map(el=>{
                if(el.id==payload)
                return {...el,status:!el.status}
                else{
                    return el;
                }
            }
            )
        }
            console.log(b)
            return b;
        case removeTodo:
            console.log(payload)
           let c=  {
                ...state,
                todo: state.todo.filter(item => item.id!=payload)
            }
              console.log(c);
              return c;
            default: return state;
    }
    
}