import React from 'react';
import {useForm } from 'react-hook-form';
import FormRow  from '../../ui/FormRow';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import { useAddSubCat } from './useAddSubCat';
import Textarea from '../../ui/Textarea';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';

function AddSubCategories() {
  const { addSubCat, isAddingSubCat } = useAddSubCat();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    addSubCat(data, {
      onSuccess: () => {
        toast.success("New Sub Category is added successfully")
        reset(); 
      },
    });
  };

 

  const headerStyle = {
    fontSize: '1.6rem',
  color: "blue",
  textAlign: "center",
  position: "relative",
  display: "inline-block",
  borderBottom: "1px solid black", // Simulate underline
  paddingBottom: "3px",

  '@media (max-width: 768px)': {
      fontSize: '1.2rem', // Adjust font size for medium devices
    },
    '@media (max-width: 576px)': {
      fontSize: '1.5rem', // Adjust font size for small devices
    },
  };

  function onError(errors) {
    console.log(errors);
  }

  return (
    <>
      <Heading as="h2" style={headerStyle}>Form for Registering Sub Categories</Heading>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
       
        <FormRow label="SubCategory name"
        error={errors?.name?.message} >
          
          <Input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
        </FormRow>
        <FormRow
        label="Description for a Sub category"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isAddingSubCat}
          {...register("description", {
            required: "This field is required",
          })}
        />
      </FormRow>
      <Button variation="secondary" type="reset">
                    Cancel
                </Button>
        <Button type="submit" disabled={isAddingSubCat}>
         Add category
        </Button>
      </Form>
    </>
  );
}

export default AddSubCategories;
