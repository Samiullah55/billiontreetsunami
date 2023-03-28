import React,{useState} from "react";
import '../styles/Formm.css';

const getLocation=()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    console.log(position);
    var {latitude}=position.coords;
    var {longitude}=position.coords;
    console.log(latitude,longitude);
  },()=>{
    alert("could not get your postion");
  })
}
const  Myform=()=>{
    const [user,setUSer]=useState({
      pname:"",email:"",aspect:"",phone:"",location:"",lat:"",longi:"",ownership:"",purpose:"",specie:"",spacing:"",survivalRate:"",suggestions:"",date:"",pic:"",other:""
    });
    let name,value;
    const handleInputs=(e)=>{
      console.log(e);
      name=e.target.name;
      value=e.target.value;
      setUSer({...user,[name]:value});
    }
    const {pname,emial,aspect,phone,location,lat,longi,ownership,purpose,specie,spacing,survivalRate,suggestions,date,pic,other}=user;
    
      return (
        <div className="Form">
          <div className="testbox">
          <form action="#">
            <div className="banner">
              <h1 className='header'>Performa for Agroforestry and Farm Forestry</h1>
            </div>
            <div className="item">
              <p>Location</p>
              <div className="name-item">
                <input className="input" type="text" name="location"
                value={user.location}
                onChange={handleInputs}
                
                placeholder="Location" required/>
              </div>
            </div>
            <div className="item">
                <p>Name:</p>
                <div className="name-item">
                  <input type="text" className="input" name="name"
                  value={user.pname}
                  onChange={handleInputs}
                  
                  placeholder="Enter name" required/>
              </div>
            </div>
            <div className="item">
              <p>Email</p>
              <input type="email" className="input" name="email" 
              value={user.email}
              onChange={handleInputs}
              
              placeholder='email' required/>
            </div>
            <div className="item">
              <p>Phone</p>
              <input type="text" name="phone" 
              value={user.phone}
              onChange={handleInputs}
              
              placeholder="92 333000000" required/>
            </div>
            <div className="item">
              <p>GPS Coordinates:</p>
              <button onClick={getLocation()}>Location</button>
            </div>
            <div className="item">
              <p>Aspect:</p>
              <input type="text" className="input" name="aspect" 
              value={user.aspect}
              onChange={handleInputs}
              
              placeholder='Aspect' required/>
            </div>
            <div className="question">
              <p>OwnerShip:</p>
              <div className="question-answer">
                <div>
                  <input className="radio" type="radio" name="ownerShip"
                  value={user.ownership}
                  onChange={handleInputs}
                  
                  required/>
                  <label htmlFor="radio" className="radio1"><span>Community</span></label>
                </div>
                <div>
                  <input type="radio" name="ownerShip1"
                  value={user.ownership}
                  onChange={handleInputs}
                  
                  required/>
                  <label htmlFor="radio" className="radio2"><span>Individual</span></label>
                </div>
              </div>
            </div>
            <div className="question">
              <p>Purpose of AF/FF:</p>
              <div className="question-answer">
                <div>
                  <input type="radio"  name="purpose1"
                  value={user.purpose}
                  onChange={handleInputs}
                  
                  id="radio_4" required/>
                  <label htmlFor="radio_4"  className="radio3"><span>Fuel Wood</span></label>
                </div>
                <div>
                  <input type="radio"  name="purpose2"
                   value={user.purpose}
                   onChange={handleInputs}
                   
                  id="radio_5" required/>
                  <label htmlFor="radio_5" className="radio4"><span>Fodder</span></label>
                </div>
                <div className="timber">
                  <input type="radio" name="purpose3"
                  value={user.purpose}
                  onChange={handleInputs}
                  
                  id="radio_6" required/>
                  <label htmlFor="radio_6" className="radio5"><span>Timber</span></label>
                </div>
                <div className="others">
                    <label ><span>Other(please specify)</span></label>
                    <input type="text" className="input1" id="radio_6" name="other"
                     value={user.other}
                     onChange={handleInputs}
                     
                    required/>
                </div>
                <div className="item">
                    <p>Species Of Plants Provided:</p>
                    <input type="text" className="input" name="specie" 
                    value={user.specie}
                    onChange={handleInputs}
                    
                    required/>
                </div>
                <div className="item">
                    <p>Spacing:</p>
                    <input type="text" className="input" name="spacing" 
                    value={user.spacing}
                    onChange={handleInputs}
                    
                     required/>
                </div>
                <div className="item">
                    <p>Survival Rate:</p>
                    <input type="text" className="input" name="survivalRate" 
                     value={user.survivalRate}
                    onChange={handleInputs}
                   
                     required/>
                </div>
                <div className="item">
                    <p>Suggestions:</p>
                    <input type="text" className="input" name="suggestions" 
                    value={user.suggestions}
                    onChange={handleInputs}
                    
                    required/>
                </div>
              </div>
            </div>
            <div className="item1">
                <p>Date of Planting:</p>
                <input type="date"
                value={user.date}
                onChange={handleInputs}
                
                name="date" required/>
                <i className="fas fa-calendar-alt"></i>
            </div>
            <div >
                <input  type="file" className="input"
                value={user.pic}
                onChange={handleInputs}
                
                name="pic" />
                <i className="fas fa-calendar-alt"></i>
            </div>
            <div className="btn-block btn">
              <button type="submit" href="#">Submit</button>
            </div>
          </form>
        </div>
        </div>
      );

}
export default Myform;