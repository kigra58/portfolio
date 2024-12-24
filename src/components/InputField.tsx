import React from "react";
import  "../css/InputField.css";

interface IProps{
    type: string;
    id?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    value: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    // onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
    // onFocus?: (e: React.FormEvent<HTMLInputElement>) => void;
    className?: string;
    // errorMessage?: string;
  
}
const InputField: React.FC<IProps> = ({
    type,
    placeholder,
    name,
    required,
    value,
    onChange,
    className,

}) => {
  return (
    <div className="form-group">
      <input 
       placeholder={placeholder} 
       onChange={(e)=>onChange && onChange(e)}
       required={required}
       value={value}
       className={className}
       name={name} type={type} />
    </div>
  );
};

export default InputField;
