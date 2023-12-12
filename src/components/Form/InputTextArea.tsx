'use client'

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  rows?:number;
  value?: string;
  placeholder?: string;
  label?: string;
}

const InputTextArea = ({
  name,
  value,
  rows,
  placeholder,
  label,
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
    {label ? label : null}
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input.TextArea 
        rows={rows}
        placeholder={placeholder}
        {...field}
        defaultValue={value}
        />
      )}
    />
    </>
  );
};

export default InputTextArea;
