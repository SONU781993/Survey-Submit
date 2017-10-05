import React from 'react';
import './style.scss';
export default({input, meta: {error, touched}})=>{
  return(
    <div>
     <input {...input} className="form-control field"/>
     <div className="alert-danger" style={{ margin: '14px 0px', background:'none'}}>
       {touched && error}
     </div>
    </div>
  );
}
