import { useForm } from 'react-hook-form';


import Input from '../../ui/Input';
import Form from '../../ui/Form';
import FormRow, { Label, Error } from '../../ui/FormRow';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Select from '../../ui/Select';
import { useCreateUser } from './useCreateUser';
import { useEditUser } from './useEditUser';

function CreateUserForm({ userToEdit = {} }) {
  const { isAdding, addUser } = useCreateUser();
  const { isEditing, editUser } = useEditUser();
  const isWorking= isAdding || isEditing;

  const {id: editId, ...editValues} = userToEdit;
  const isEditSession = Boolean(editId);
  

  const { register, handleSubmit, reset, formState, watch } = useForm({
    defaultValues: isEditSession ? editValues : {},
    });

  const { errors } = formState;




  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editUser(
        { newUser: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      addUser(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }


  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow>
        <Label htmlFor="fullName">Full Name</Label>
        <Input type="text" id="fullName" disabled={isWorking} {...register("fullName", { required: "This field is required" })} />
        {errors?.fullName?.message && <Error>{errors.fullName.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" disabled={isWorking} {...register("email", { required: "This field is required" })} />
        {errors?.email?.message && <Error>{errors.email.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" disabled={isWorking} {...register("password", { required: "This field is required" })} />
        {errors?.password?.message && <Error>{errors.password.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input type="password" id="confirmPassword" disabled={isWorking} {...register("confirmPassword", {
          required: "This field is required",
          validate: value => value === watch('password') || "Passwords do not match"
        })} />
        {errors?.confirmPassword?.message && <Error>{errors.confirmPassword.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="role">Role</Label>
        <Select id="role" disabled={isWorking} {...register("role", { required: "This field is required" })}>
          <option value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="supervisor">Supervisor</option>
          <option value="managing director">Managing Director</option>
          <option value="recoder">Recoder</option>
        </Select>
        {errors?.role?.message && <Error>{errors.role.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Profile Image</Label>
        <FileInput id="image" accept="image/*" disabled={isWorking} {...register("image")} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit" disabled={isWorking}>{isEditSession ? "Save Changes" : "Add User"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateUserForm;
