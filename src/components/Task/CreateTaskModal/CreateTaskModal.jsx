import { Modal } from '../TaskModal/TaskModal';
import { TaskForm } from '../TaskForm/TaskForm';

export const CreateTaskModal = ({ initialData, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm initialData={initialData} onClose={onClose} />
    </Modal>
  );
};
