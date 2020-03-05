import React from 'react'

export default function InputField(props){
    return (
      <div className="col-sm-5">
        <input
          className="form-control"
          type={props.type}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </div>
    );
}