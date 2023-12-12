import { ReactNode } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

type FormConfig = {
  defaultValues?: Record<string, any>;
};

type FormProps = {
  children?: ReactNode;
  submitHandler: SubmitHandler<any>;
} & FormConfig;

function Form({ children, submitHandler, defaultValues }: FormProps) {
  const formConfig: FormConfig = {};

  if (formConfig) formConfig.defaultValues = defaultValues;

  const methods = useForm<FormProps>(formConfig);
  const { handleSubmit, reset } = methods;
  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
export default Form;
