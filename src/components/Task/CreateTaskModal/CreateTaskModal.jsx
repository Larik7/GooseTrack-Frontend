import { Modal } from '../TaskModal/TaskModal';
import { TaskForm } from '../TaskForm/TaskForm';

export const CreateTaskModal = ({ onClose, category, task }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} category={category} task={task} />
    </Modal>
  );
};
