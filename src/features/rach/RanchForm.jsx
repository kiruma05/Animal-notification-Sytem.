import { useForm } from "react-hook-form";
import React from 'react';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from "../../ui/Button";
import { useCreateRanch } from "./useCreateRach";
import Heading from "../../ui/Heading";
import Textarea from "../../ui/Textarea";
import toast from "react-hot-toast";

function RanchForm() {
    const { register, handleSubmit, reset, formState } = useForm();
    const { isAdding, addRanch } = useCreateRanch();
    const { errors } = formState;

    function onSubmit(data) {
        addRanch(
            { ...data },
            {
                onSuccess: (data) => {
                  console.log(data)
                    toast.success("New Ranch is added Successfully")
                    reset();
                },
            }
        );
    }

    // function onError(errors) {
    //     // console.log(errors);
    // }

    return (
      <>
      <Heading as="h2" style={{ textAlign: 'center' }}>Creating or Registering New Ranch to Our Company </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
       
       <FormRow label="Ranch name"
       error={errors?.name?.message} >
         
         <Input
           type="text"
           id="name"
           {...register('name', { required: true })}
         />
       </FormRow>
       <FormRow
       label="Description for a ranch"
       error={errors?.description?.message}
     >
       <Textarea
         type="text"
         id="description"
         defaultValue=""
         disabled={isAdding}
         {...register("description", {
           required: "This field is required",
         })}
       />
     </FormRow>
     <Button variation="secondary" type="reset">
                   Cancel
               </Button>
       <Button type="submit" disabled={isAdding}>
        Add category
       </Button>
     </Form>
        </>
    );
}

export default RanchForm;
