import { Modal } from '../TaskModal/TaskModal';
import { TaskForm } from '../TaskForm/TaskForm';

export const CreateTaskModal = ({ onClose, tasks }) => {
  return (
    <Modal onClose={onClose}>
      <TaskForm onClose={onClose} tasks={tasks} />
    </Modal>
  );
};
