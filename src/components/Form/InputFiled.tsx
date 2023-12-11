'use client'

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small" | "middle";
  value?: string;
  id?: string;
  placeholder?: string;
  validation?: string;
  label?: string;
}

const InputFiled = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  label,
}: IInput) => {
  const { control,formState:{errors} } = useFormContext();
  return (
    <>
    {label ? label : null}
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        type === 'password' ?
        <Input.Password
          type={type}
          size={size}
          id={id}
          placeholder={placeholder}
          {...field}
          value={value ? value : field.value}
        /> : <Input
        type={type}
        id={id}
        size={size}
        placeholder={placeholder}
        {...field}
        value={value ? value : field.value}
      />
      )}
    />
    </>
  );
};

export default InputFiled;
