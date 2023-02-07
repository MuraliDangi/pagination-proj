import axios from "axios";
import React, { useEffect, useState } from "react"
import Pagination from "./Pagination";

function App() {
  const [data, setData] = useState([]);
  const [perpage, setperPage] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setData(res.data); setperPage(res.data.slice(0, 100));
    });
  }, [])
  const pageHandler = (pageNumber)=>{
    setperPage(data.slice((pageNumber*10)-10, pageNumber*10))
  }
  return (
    <div className="container py-2">
      <h3 className="my-4">Welcome to pagination Application</h3>
      {
        data.length >= 1 ? <div>
          {
            perpage.map(post =>
              <ul className="border list-group m-1">
                <li className="list-group-item list-group-item-action "><b>Id:</b>{post.id}</li>
                <li className="list-group-item list-group-item-action"><b>Title:</b>{post.title}</li>
                <li className="list-group-item list-group-item-action"><b>UserId:</b>{post.userId}</li>
              </ul>
            )
          }
          <Pagination data={data} pageHandler={pageHandler}/>
        </div>
          :
          <p>Data Not Loaded...</p>
      }
    </div>
  );
}

export default App;
