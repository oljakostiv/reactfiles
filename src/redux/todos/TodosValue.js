// import React from "react";
//
// export default function Todos({todosValue, isLoading, btnComplete}) {
//
//     if (isLoading) return <h1>Loading...</h1>
//
//     return (
//         <div>
//             {todosValue.map(todo =>
//                 <React.Fragment key={todo.id}>
//                     <div>{todo.title} - {todo.description}
//                         <br/>
//                         <i>Created Ad: {new Date(todo.createdAt).toDateString()}</i>
//                         <br/>
//                         Status: {todo.completed.toString()}
//                     </div>
//                     <div>
//                         <button className={'myBtn'} onClick={btnComplete}>Complete</button>
//                         <button className={'myBtn'}>Delete</button>
//                     </div>
//                     <hr/>
//                 </React.Fragment>
//             )
//
//             }
//         </div>
//     )
// }
