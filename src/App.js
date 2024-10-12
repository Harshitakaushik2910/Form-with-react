import './App.css';
import {useState} from 'react';

// function App() {

  // const [firstName,setFirstName]=useState("");
  // const [LastName,setLastName]=useState("");

  // function changeFirstNameHandler(event)
  // {
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event)
  // {
  //   setLastName(event.target.value);
  // }

  // const [formdata,setFormData]=useState({firstName:"",lastName:"",email:"",comments:"",checkbox:"true",radiobtn:" true",
  //   favcar:""
  // })

  // function changeHandler(event){
  //   const {name,value,checked,type}=event.target
  //   setFormData(prevFormData=>{
  //     return{
  //       ...prevFormData,
  //        [name] :type==="checkbox"? checked:value
  //     }

  //   });
  // }
  // function submitHandler(event){
  //  event.preventDefault();
  //  console.log("hogya khtm")
  // }
  // return (
  //   <div className='App'>
  //        <form onSubmit={submitHandler}>
  //           <input  type='text'placeholder='first name' onChange={changeHandler} name='firstName' 
  //             className='border-2 border-black' value={formdata.firstName}></input>
  //           <br/>
  //           <br/>
  //           <input  type='text'placeholder='Last name' onChange={changeHandler} name='lastName'
  //              className='border-2 border-black' value={formdata.lastName}></input>
  //           <br/>
  //           <br/>
  //           <input  type='email'placeholder='Enter your email here' onChange={changeHandler} name='email'
  //              className='border-2 border-black' value={formdata.email}></input>

  //            <br/>
  //            <br/>
  //            <textarea  placeholder='enter you comments here' onChange={changeHandler} name='comments'
  //             className='border-2 border-black w-[350px] h-[350px]' value={formdata.comments}/>  
  //             <br/>
  //             <br/>
  //             <input type='checkbox' onChange={changeHandler} name='checkbox'id='isvisisble'checked={formdata.checkbox}
  //             className='border-2 border-black'></input>
  //             <label htmlFor='isvisisble'>Am i visible?</label>
  //             <br/>
  //             <br/>
  //             <input type='radio' onChange={changeHandler}
  //             name='radiobtn'checked={formdata.radiobtn==="online-mode"}
  //             value="online-mode" id="online-mode"></input>
  //             <label htmlFor='online-mode'>online mode</label>
  //             <br/>
  //             <br/>
  //             <input type='radio' onChange={changeHandler}
  //             name='radiobtn' checked={formdata.radiobtn==="offline-mode"}
  //             value="offline-mode" id="offline-mode"></input>
  //             <label htmlFor='offline-mode'>offline mode</label>

  //              <br/><br/>
  //              <label htmlFor='favcar'>select ur car</label><br/>
  //              <select onChange={changeHandler} name='favcar'id="favcar" value={formdata.favcar}  className='border-2 border-black'>
  //                <option value="scorpio">Scorpio</option>
  //                <option value="fortuner">fortuner</option>
  //                <option value="wagner">wagner</option>
  //                <option value="bmw">bmw</option>
  //              </select>
              
  //             <br/>
  //             <button>submit</button>

  //        </form>
  //   </div>
  // );
// }
 function App()
 {
  const[formData,setFormData]=useState({
    firstName:"",lastName:"",email:"",country:"India",address:"",city:"",state:"",
       zip:"",comments:false,candidate:false,offers:false,pushNotification:""
   })
  function changeHandler(event){
    const {name,value,checked,type}=event.target
    setFormData(prevFormData=>{
      return{
        ...prevFormData,
         [name] :type==="checkbox"? checked:value
      }

    });
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("finally priting the form data");
    console.log(formData);
  }
  return (
         <div>
             <form className='flex flex-col w-[75%] h-[100%] bg-slate-100 align-middle  mx-auto' onSubmit={submitHandler} >
              <label htmlFor='firstName' className='m-3 mb-1 text-lg'>First name</label>
                <input type='text'name='firstName'id='firstName'
                 value={formData.firstName} onChange={changeHandler} placeholder=' Harshita' className='border-2 border-black rounded-md m-3 h-11'/>

                <label htmlFor='lastName' className='m-3 mb-1 text-lg'>Last name</label>
                <input type='text'name='lastName'id='lastName' onChange={changeHandler}
                value={formData.lastName} placeholder=' Kaushik' className='border-2 border-black rounded-md m-3 h-11'/>

                <label htmlFor='email' className='m-3 mb-1 text-lg'>Email address</label>
                <input type='text'name='email'id='email'value={formData.email} onChange={changeHandler}
                 placeholder=' h.kaushik1029@gmail.com' className='border-2 border-black rounded-md m-3 h-11'/>

                <label htmlFor='country' className='m-3 mb-1 text-lg'>Country</label>
                <select name='country'id='country'value={formData.country} onChange={changeHandler}
                     className='bg-slate-100 border-2 border-black rounded-md m-3 h-11'>
                  <option value="India">India</option>
                  <option value="Austrelia">Austrelia</option>
                  <option value="London">London</option>
                  <option value="America">America</option>
                </select>

                  <label htmlFor='address' className='m-3 mb-1 text-lg'>Street address</label>
                  <input type='text'placeholder='  1234 Main St'name='address'id='address'value={formData.address}onChange={changeHandler}
                      className='border-2 border-black rounded-md m-3 h-11'/>

                  <label htmlFor='city' className='m-3 mb-1 text-lg'>City</label>
                  <input type='text'placeholder='  Asansol'name='city'id='city'value={formData.city}onChange={changeHandler}
                     className='border-2 border-black rounded-md m-3 h-11'/>

                  <label htmlFor='state' className='m-3 mb-1 text-lg'> State / Province</label>
                  <input type='text' placeholder='  West Bengal'name='state'id='state'value={formData.state} onChange={changeHandler}                  
                         className='border-2 border-black rounded-md m-3 h-11'/>

                  <label htmlFor='zip' className='m-3 mb-1 text-lg'>ZIP / Postal code</label>
                  <input type='text' placeholder='  713301'name='zip' id='zip' value={formData.zip} onChange={changeHandler}
                       className='border-2 border-black rounded-md m-3 h-11'/>

                  <fieldset>
                    <legend className='m-3 mb-1 text-lg'>By Email</legend>
                     <div className='flex flex-col gap-4'>
                       <div className='flex flex-row'>
                        <input type='checkbox' id='comments'name='comments'checked={formData.comments} onChange={changeHandler}
                          className='ml-5 mt-0 w-3'></input>
                          <div className='ml-6 mt-5'>
                           <label htmlFor='comments' className='mt-3  text-lg'>Comments</label><br/>
                           <p className='text-gray-800'>Get notified when someone posts a comment on a posting.</p>
                          </div> 
                          </div>



                       <div className='flex flex-row'>
                        <input type='checkbox'id='candidate'name='candidate'checked={formData.candidate} onChange={changeHandler}
                         className='ml-5 mt-0 w-3'></input>
                          <div className='ml-6 mt-5'>
                          <label htmlFor='candidate' className='mt-3 text-lg'>Candidates</label><br/>
                         <p className='text-gray-800'>Get notified when a candidate applies for a job</p>
                         </div>
                       </div> 

                      <div className='flex flex-row'>
                      <input type='checkbox'id='offers'name='offers'checked={formData.offers} onChange={changeHandler}
                      className='ml-5 mt-0 w-3'></input>
                          <div className='ml-6 mt-5'>
                          <label htmlFor='offers' className='mt-3 text-lg'>Offers</label><br/>
                      <p className='text-gray-800'>Get notified when a candidate accepts or rejects an offer.</p>
                      </div>
                      </div>               
                
                  </div>

                  </fieldset>

                  <fieldset>
                      <legend className='font-bold text-lg'>Push Notification</legend>
                      <p>These are delivered via SMS to your mobile phone</p>
                    
                      <input type='radio'name='pushNotification'id='pusheverything'value="Everything"
                       onChange={changeHandler} ></input>
                       <label htmlFor='pusheverything' className='ml-5'>Everything</label>
                       <br/>

                       <input type='radio'name='pushNotification'id='pushemail'value="Same as Email"                       onChange={changeHandler} ></input>
                       <label  htmlFor='pushemail'className='ml-5'>Same as Email</label>
                       <br/>
                       
                       <input type='radio'name='pushNotification'id='pushnothing'value="No Push Notification"
                       onChange={changeHandler} ></input>
                       <label htmlFor='pushnothing' className='ml-5'> No Push Notification</label>
                       <br/>
                   </fieldset>
                   <button className='bg-blue-500 rounded-md text-white font-bold px-2 py-4 w-[80px] mt-2 ml-4'>Save</button>

             </form>
         </div>
  )
 }

 
export default App;

