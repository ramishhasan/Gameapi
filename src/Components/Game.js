import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
function FetchNews() {
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetchdata = () => {
      fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json').then(response => response.json()).then(json => {
        setdata(json)
      })
    }
    fetchdata();
  }, [])
const style={
  backgroundImage:"url('https://img.freepik.com/free-vector/games-time-neon-text-with-gamepad_1262-15457.jpg?w=2000')",
  opacity:'0.9'

}
  return (
    <div className='App' style={style}>
      <h1 style={{color:'green',textAlign:'center'}}>FETCHING GAME API</h1>
      <div className="container">
        <div className="row">

          {
            data.map((item) => {
              return (


                <div className="col-4">

                  <div className="card" style={{ width: "18rem", color: 'white', backgroundColor: 'black', margin: '5px'}}>
                    <div className="card-body">
                      <h5 className="card-title"  style={{color:'yellow'}}>Title : {item.title}</h5>
                      <h5 className="card-title">Platform : {item.platform}</h5>
                      <h5 className="card-title"  style={{color:'green'}}>Score : {item.score}</h5>
                      <h5 className="card-text">Genre : {item.genre}</h5>
                      <h5 className="card-text" style={{color:'blue'}}>Editors-choice : {item.editors_choice}</h5>
                    </div>
                  </div>

                </div>
              );
            })


          }


        </div>
      </div>
  
    </div>
  )
}

export default FetchNews