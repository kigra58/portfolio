import React from "react";
import  "../css/InputField.css";
import {Controller,Control} from "react-hook-form"

interface IProps{
    type: string;
    id?: string;
    placeholder?: string;
    name: string;
    required?: boolean;
    value: string;
    control:Control;
    onChange?: (  e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>) => void;
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
    control
}) => {
  return (
    <div className="form-group">
      <Controller 
       render={({ field }) => (
        <input
          {...field}
          placeholder={placeholder} 
          onChange={(e)=>onChange && onChange(e)}
          required={required}
          value={value}
          className={className}
          type={type} 
          />
        )}
        name={name}
        control={control}
      />
    </div>
  );
};

export default InputField;
