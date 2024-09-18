// useDeleteCattle.js
import { useMutation } from "@tanstack/react-query";
import { deleteCattle } from '../../services/apiCattles';
import { toast } from 'react-hot-toast';

const useDeleteCattle = () => {
  return useMutation({
    mutationFn: async (id) => {
      try {
        await deleteCattle(id);
        toast.success('Cattle deleted successfully');
      } catch (error) {
        toast.error('Error deleting cattle');
        throw error;
      }
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });
};

export default useDeleteCattle;
