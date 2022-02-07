import React, { useState } from "react";
function ControlledForm()
{
    const[firstName,setfirstName] = React.useState();
    const[lastName,setlastName] = React.useState("");
    const[Email,setEmail] = React.useState("");
    const[gender,setGender] = React.useState("");
    const[Courses,setCourse] = React.useState("React");
    const[EFirstName,setEfirstName] = React.useState("");
    const[ELastName,setlEastName] = React.useState("");
    const[EEmail,setEEmail] = React.useState("");
    const[EGender,setEGender] = React.useState("");
    const[f,setf] = React.useState("");

    var a = {};
    const handleReset = () => {
      setfirstName("");
      setlastName("");
      setEmail("");
      setGender("");
      setCourse("");
      setEfirstName("");
      setlEastName("");
      setEEmail("");
      setEGender("");
      setf("");
    };
//     const handleReset = () => {
//     setfirstName("");
//     setlastName("");
//     setEmail("");
//     setGender("");
//     setCourse("");
//   };


    
    
    const handleSubmit=(e)=>
    {
       
     e.preventDefault();
     a={first:firstName,last:lastName, email:Email,gender:gender,course:Courses}
    
   

     if(a.first=="" && a.last==""&&a.email==""&&a.gender=="" )
     {
      
         setf("Enter the feilds")
       
         
        
        
     }
     else{
   
     if(a.first=="")
     {
     
        setEfirstName("Enter the Name")
      
     }
     if(a.last=="")
     {
        setlEastName("Enter the Last name")
        
     }
     if(a.email=="")
     {
        setEEmail("Enter the Email Address")
      
     }
     if(a.gender=="")
     {
        setEGender("Select the Gender")
        
        
     }

     
   
   
   
    }
   
    }
     

   
    return( 
    
         <div className="div2">
            
        <h1 className="div3">Controlled Form</h1>
        <form >
            <div>
                <label className="div3">First Name:</label>
                <input type="text" required value={firstName} name="firstName" onChange={(e)=>setfirstName(e.target.value,setf(""), setEfirstName("") ) }/>
                <br></br>
               <span className="div1">{EFirstName}</span>
              
            </div><br></br>
            <div>
                <label className="div3">Last Name:</label>
                <input type="text" value={lastName} name="lastName" onChange={(e)=>setlastName(e.target.value,setf(""),setlEastName(""))} />
                <br></br>
               <span className="div1">{ELastName}</span>
            </div><br></br>
            <div>
                <label className="div3">Email:</label>
                <input type="text" value = {Email}name="Email" onChange={(e)=>setEmail(e.target.value,setf(""),setEEmail(""))}/>
                <br></br>
               <span className="div1">{EEmail}</span>
            </div><br></br>
            <div>
                <label className="div3">gender:</label>
                <input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value,setf(""),setEGender(""))}/> <span className="div3">Male</span>
                <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value,setf(""),setEGender(""))}/><span className="div3">Female</span>
                <br></br>
               <span className="div1">{EGender}</span>
            </div><br></br>
            <div>
                <label className="div3">Courses:</label>
                <select name = "courses" value={Courses}  onChange={(e)=>setCourse(e.target.value)}>
                <option>React</option>
                <option>Angular</option>
                <option>Node</option>
                <option>Mongo</option>
                </select>
            </div><br></br>
            <button type = "submit" onClick={(e)=>handleSubmit(e)}>Submit</button>&nbsp;
            <button type="reset" onClick={handleReset }>
          Reset
        </button>
            <div className="div1">{f}</div>
        </form>
        </div>
    )
}
export default ControlledForm;