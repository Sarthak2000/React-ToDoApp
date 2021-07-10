import React, { useState } from "react";

export default function App() {
  let [todo, settodo] = useState("");
  let [todolist, settodolist] = useState([]);

  function entertodolist() {
    let newlist = [...todolist, { "id": Date.now(), "todovalue": todo }];
    settodo("");
    settodolist(newlist);
  }
  return (
    <div className="App m-2 container">
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Todo" value={todo} onChange={(e)=>{settodo(e.target.value)}}></input>
        <button className="btn btn-primary" onClick={entertodolist}>Add</button>
        
      </div>
      <div className="todolist">
          <div className="card">
            <ul className="list-group list-group-flush">
              {todolist.map((obj) => {
                return <li className="list-group-item">{obj.todovalue}</li>
              })}
            </ul>
          </div>
        </div>
    </div>
  );
}
