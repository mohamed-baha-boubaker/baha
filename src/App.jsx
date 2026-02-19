import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const list =[    //array of objects
  {
    title: "React ",
    url:"https://reactjs.org/",
    author:"Jordan",
    num_comments:3,
    points:4,
    objectID:0,
  },
  {
    title: "Redux ",
    url: "https://redux.js.org/",
    author: "Dan",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: "new story",
    url:"https://newstory.js.org/",
    author:"malika",
    num_comments: 6,
    objectID: 2,
  }
];

function App() {  
  return (
    <div>
      <Title/>
      <Search/>
      <hr></hr>
      <List/>
    </div>
  );
}
function List(){
  return(
     <ul>
        {list.map(function (item) {   
        return(
          <li key={item.objectID}> 
            <span> <a href={item.url}>{item.title}</a> </span>
            <span> {item. author} </span>
            <span> {item.num_comments} </span>
            <span> {item. points}</span> 
          </li>
        );
        })}
      </ul>
  )
}  
function Search(){
  return(
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
    
  )
}
function Title(){
  return(
    <h1>My Hacker Stories</h1>
  )
}
export default App
