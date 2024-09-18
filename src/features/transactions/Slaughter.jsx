import { useForm } from "react-hook-form";
import React from 'react';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from "../../ui/Button";
//import { useCreateRanch } from "./useCreateRach";
import Heading from "../../ui/Heading";
//import Textarea from "../../ui/Textarea";
//import toast from "react-hot-toast";

function Slaughter() {
    const { register, handleSubmit, formState } = useForm();
   // const { isAdding, addRanch } = useCreateRanch();
    const { errors } = formState;

    function onSubmit(data) {
        console.log(data);
    }

    // function onError(errors) {
    //     // console.log(errors);
    // }

    return (
      <>
      <Heading as="h2" style={{ textAlign: 'center' }}>Registering Slaughter </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
       
       <FormRow label="Tag Number"
       error={errors?.name?.message} >
         
         <Input
           type="text"
           id="name"
           {...register('name', { required: true })}
         />
       </FormRow>

       <FormRow label="Slaughter Date "
       error={errors?.name?.message} >
         
         <Input
           type="date"
           id="name"
           {...register('name', { required: true })}
         />
       </FormRow>
       
     <Button variation="secondary" type="reset">
                   Cancel
               </Button>
       <Button type="submit" >
        Submit
       </Button>
     </Form>
        </>
    );
}

export default Slaughter;
