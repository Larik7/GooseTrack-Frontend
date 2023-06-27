import { Modal } from 'components/TaskModal/TaskModal';
import { TaskForm } from 'components/TaskForm/TaskForm';

export const CreateTaskModal = ({ initialData, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm initialData={initialData} onClose={onClose} />
    </Modal>
  );
};
