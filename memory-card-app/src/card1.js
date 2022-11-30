import React , {useState} from "react";


const Card1 = (props) =>{

    const [newPoints , setNewPoints] = useState(0)
    const [arrPoints, setarrPoints] = useState([])
    const [scorePoint, setScorePoints] = useState(0)



    let engine = (event) =>{
        let target = event.target

        let value  = target.innerHTML

        if (arrPoints.includes(value)==true){
            console.log('game over, restart!')
            setNewPoints(0)
            setarrPoints([])

        } else {

            setarrPoints([...arrPoints,value])
            setNewPoints(newPoints+1)
    



        }
        if(newPoints>scorePoint){
            setScorePoints(newPoints)
        }

    }



    return(
        <div >
            <div>Current Score: {newPoints}</div>
            <div>Best Score: {scorePoint}</div>
            <div>{arrPoints}</div>
            <div  style={{
                    display:"grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gridTemplateRows: '1fr 1fr 1fr 1fr',
                    gap:'20px'


                }} 
                onClick={engine} className="cards--containter">{props.run.map((item,i)=>
                <div className="cards" key={i}>{item}</div>
                )} 
            </div>

        </div>
    )
}

export default Card1

//setup a best score
