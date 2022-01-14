import { addTodo, editTodo, removeTodo } from "./constant";

export const add=(data)=>{
    console.log(data)
    return {
        type:addTodo,
    payload:data
}
};
export const edit=(data)=>({
    type:editTodo,
    payload:data,
} );
export const deletetodo=(data)=>({
    type:removeTodo,
    payload:data
});