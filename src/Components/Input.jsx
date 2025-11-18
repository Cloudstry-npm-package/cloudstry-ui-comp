import React from "react";
export const FieldInput = ({type = "text",lable,placeholder,...props})=>{
    return (
        <div>
        <labe >{lable}</labe>
        <input type={type} placeholder={placeholder} {...props} />
      </div>
    );

}

 