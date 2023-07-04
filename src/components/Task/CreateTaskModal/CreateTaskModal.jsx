import { Modal } from '../TaskModal/TaskModal';
import { TaskForm } from '../TaskForm/TaskForm';

export const CreateTaskModal = ({ onClose, category }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} category={category} />
    </Modal>
  );
};
