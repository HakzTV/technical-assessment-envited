import React, {useState} from "react";
import DatePicker from "react-date-picker";
const createEvent = () =>{
    return(
        <div className="Hello">
        <h1>Submit your details</h1>
            <form action="/submit" method="POST">
    <div>
        <label for="input">Event Name</label>
        <input type="text" name="eventName" className="eventName" id="eventN"/>
    </div>
    <div>
        <label for="input">Host Name</label>
        <input type="text" name="hosttName" className="hostName" id="hostN"/>
    </div>
    <div>
        <label for="Host Name">Post</label>
        <textarea class="form-control .form-control-lg " id="exampleFormControlTextarea1" name="postBody" rows="8"></textarea>
    </div>
    <div>
    {/* <input></input> */}
    </div>
    {/* Submit button */}
    <button type="submit" class="btn" name="button" >Publish</button>
    
</form>
        </div>
    );
};

export default createEvent;