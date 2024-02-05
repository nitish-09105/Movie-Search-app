import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Search from "./Search";
import { useState } from "react";
import axios from 'axios'
import Result from "./Result";
function App() {
  const [state,setState]=useState({
    search:'',
    results:[]
  })
  const handleInput=(event)=>{
    let search=event.target.value;
    setState((prevState)=>{
      return {...prevState,search: search}
    })
  }


  const searchResult = (event) => {
    if (event.key === 'Enter') {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=16d7a7100dc2f9e880b1decab22ee62f&query=${state.search}`)
        .then(res => {
          setState(prevState => {
            console.log(res.data.results)
            return { ...prevState, results: res.data.results }
          })
        })
        .catch(err => console.log(err))
    }
  }

  return (
    <div className="w-100  main-wrapper d-flex flex-column align-items-center min-vh-100">
      <header className="w-100 mt-5 text-center text-white">
        <h2>Movie Search</h2>
      <Search handleInput={handleInput} searchResult={searchResult}/>
      <div className="container">
        <div className="row ">
          {
            state.results.map((result,i)=>(
              <div className="col-12 col-sm-2 col-md-4 col-lg-4">
                <Result result={result}/>
                </div>
            ))
          }
        </div>
      </div>
      </header>
    </div>
  );
}


export default App;
