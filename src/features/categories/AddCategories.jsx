import React from 'react';
import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import { useAddCat } from './useAddCat';
import Textarea from '../../ui/Textarea';
import toast from 'react-hot-toast';
import Form from '../../ui/Form';

function AddCategories() {
  const { addCat, isAddingCat } = useAddCat();
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    addCat(data, {
      onSuccess: () => {
        toast.success("New Category is added successfully");
        reset(); 
      },
    });
  };

  const headerStyle = {
    fontSize: '2.8rem', // Default font size
    color: "blue",
    textAlign: "center",
    position: "relative",
    display: "inline-block",
    borderBottom: "1px solid black", 
    paddingBottom: "3px",
    
    // Media queries for responsive font size
    // '@media (max-width: 768px)': {
    //   fontSize: '2rem', // Increase font size for medium devices
    // },
    // '@media (max-width: 576px)': {
    //   fontSize: '2.2rem', // Increase font size for small devices
    // },
  };

  return (
    <>
      <Heading as="h2" style={headerStyle}>Form for Registering Categorie</Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
       
       <FormRow label="Ctegory Name"
       error={errors?.name?.message} 
       //</Form>labelFontSize="1.6rem"
       >
         
         
         <Input
           type="text"
           id="name"
           {...register('name', { required: true })}
         />
       </FormRow>

       
       <FormRow
       label="Description for Category"
       error={errors?.description?.message}
       //labelFontSize="1.6rem"
     >
       <Textarea
         type="text"
         id="description"
         defaultValue=""
         Sdisabled={isAddingCat}
         {...register("description", {
           required: "This field is required",
         })}
       />
     </FormRow>
     <Button variation="secondary" type="reset">
                   Cancel
               </Button>
       <Button type="submit" disabled={ isAddingCat} >
        add category
       </Button>
     </Form>
    </>
  );
}

export default AddCategories;
