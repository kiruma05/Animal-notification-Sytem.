import React, { useState } from 'react';
import { createEditCattle } from '../../services/apiCattles';
import { toast } from 'react-hot-toast';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

const CreateCattleForm = ({ cattleToEdit }) => {
  const [tagNumber, setTagNumber] = useState(cattleToEdit?.tagNumber || '');
  const [BOT, setBOT] = useState(cattleToEdit?.BOT || '');
  const [ranchId, setRanchId] = useState(cattleToEdit?.ranchId || '');
  const [subcategoryName, setSubcategoryName] = useState(cattleToEdit?.subcategoryName || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCattle = {
      tagNumber,
      BOT,
      ranchId,
      subcategoryName,
    };

    try {
      if (cattleToEdit) {
        await createEditCattle(newCattle, cattleToEdit.id);
        toast.success('Cattle updated successfully');
      } else {
        await createEditCattle(newCattle);
        toast.success('Cattle created successfully');
      }
    } catch (error) {
      toast.error('Error creating/updating cattle');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow>
        <label>Tag Number</label>
        <Input type="text" value={tagNumber} onChange={(e) => setTagNumber(e.target.value)} required />
      </FormRow>
      <FormRow>
        <label>DOB</label>
        <Input type="text" value={BOT} onChange={(e) => setBOT(e.target.value)} required />
      </FormRow>
      <FormRow>
        <label>Ranch Name</label>
        <Input type="text" value={ranchId} onChange={(e) => setRanchId(e.target.value)} required />
      </FormRow>
      <FormRow>
        <label>Category Name</label>
        <Input type="text" value={subcategoryName} onChange={(e) => setSubcategoryName(e.target.value)} required />
      </FormRow>
      <FormRow>
        <label>Sub Category Name</label>
        <Input type="text" value={subcategoryName} onChange={(e) => setSubcategoryName(e.target.value)} required />
      </FormRow>
      <Button type="submit">Save Cattle</Button>
    </Form>
  );
};

export default CreateCattleForm;
