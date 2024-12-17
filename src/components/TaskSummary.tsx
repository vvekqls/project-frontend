interface TaskSummaryProps {
  total: number;
  completed: number;
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ total, completed }) => {
  return (
    <div className="flex justify-between py-4 text-white">
      <div className="flex items-center gap-2">
        <p className="text-lg">Tasks:</p>
        <span className="font-bold">{total}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg">Completed:</p>
        <span className="font-bold">
          {completed} of {total}
        </span>
      </div>
    </div>
  );
};

export default TaskSummary;
