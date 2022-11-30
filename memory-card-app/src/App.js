import React , {useState} from "react";
import Card1 from "./card1";
import './style.css'

const App = ()=> {
const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"
                  ,"Q","R","S","T","U",               
                  "V","W","X","Y","Z"];
let blank = []
const [points,setPoints] = useState(0)
const [arrCards,setArrCards] = useState([]);


  let shuffle = (a) =>{
    for (let i = a.length -1;i>0;i--){
      const j = Math.floor(Math.random()*(i+1));
      ([a[i],a[j]] = [a[j],a[i]])
    }
    return  setArrCards(a)
  }

  let prevdef = (event)=>{
    event.preventDefault()
  }
  let genArr = (event) =>{
    event.preventDefault()

    let value = event.target.value
      for (let a = 0;a<value;a++){

        blank.push(alphabet[a])


      }
      setArrCards(blank)
      

  }



  return (

    <div className="App">
      <form  onSubmit={prevdef}>Number of Cards from 1 to 26:
        <input type='number'min={1} max={26} onChange={genArr}></input>
      </form>

      <div onClick={()=>shuffle(arrCards)}>
        <Card1  run={(arrCards)} points = {points} />
      </div>    
    </div>
  );
}

export default App;



