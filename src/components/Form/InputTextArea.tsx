'use client';
import { getErrorMessage } from '@/utils/validator';
import { Input } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';
interface IInput {
  name: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  label?: string;
}

const InputTextArea = ({ name, value, rows, placeholder, label }: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessage(errors, name);
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
      <small className="text-red-500">{errorMessage}</small>
    </>
  );
};

export default InputTextArea;
