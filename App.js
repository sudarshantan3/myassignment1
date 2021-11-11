import"./styles.css";
import{useState} from "react";
export default function App(){
    const[color,setcolor]=useState("");
    const changeHandler=(event)=>{
        setcolor(event.target.value);
        const regex=new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"); 
    var regx=regex.test(event.target.value);
    console.log(regx);
    if(regx){
        document.getElementById("app").innerHTML=";"
    }else{
        document.getElementById("app").innerHTML="this is not hexa color code;"
    }
};
return(
    <>
    <h1>Normal State</h1>
    <div className="App" style={{backgroundColor:color}}>
    <div className="con1">
        <label htmlFor="hex">
            Hex code<input type="text"id="hex"value={color}onChange={changeHandler}/>
            </label>
            <p id="app"style={{color:"red"}}></p>
            </div>
            </div>
            </>
);
}