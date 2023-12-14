'use client';

import { Select } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

export type SelectOptions = {
  label: string;
  value: string | boolean;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: 'large' | 'small' | 'middle';
  value?: string | string[] | undefined | boolean;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
};

const InputSelectFiled = ({
  name,
  size = 'large',
  value,
  placeholder = 'select',
  options,
  label,
  defaultValue,
  handleChange,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={handleChange ? handleChange : onChange}
            size={size}
            options={options}
            value={value}
            style={{ width: '100%' }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default InputSelectFiled;
