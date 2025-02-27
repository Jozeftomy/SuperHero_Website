import { useRef} from "react";


const Grievance = ()=>{
    const name = useRef();
    const grievance = useRef();
  
    function submit(){
        console.log(name.current.value);
        console.log(grievance.current.value);
    }
    return (
        <>
            <h1>Grievance</h1>
                <div>
                <label>Name:</label>
                <input type="text" name="name" ref={name}/>
                <br/>
                <label>Message: </label>
                <textarea name="message"  ref={grievance}/>
                </div>
                <button onClick={submit}>Submit</button>
        </>
    )
}
export default Grievance;