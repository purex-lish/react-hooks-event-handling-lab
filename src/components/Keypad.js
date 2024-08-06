// Code Keypad Component Here
function Keypad (){
    function handleChange(){
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" onChange={handleChange} name="passwordis: "placeholder="enter password"></input>
        </div>
    )
}

export default Keypad;