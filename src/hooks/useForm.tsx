import { useState } from "react";

const useForm = (data: { [name: string]: string|object|[] }) => {
  const [formData, setFormData] = useState({
    ...data,
  });
  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setFormData((pre: typeof data) => ({ ...pre, [name]: value }))
  };
  return { formData, onChangeHandler, setFormData };
};

export default useForm;
