interface TaskSummaryProps {
  total: number;
  completed: number;
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ total, completed }) => {
  return (
    <div className="flex justify-between py-4 text-white">
      <div className="flex items-center gap-2">
        <p className="text-sm text-lightBlue ">Tasks</p>
        <span className="text-xs w-6 text-center bg-foreground border-2 border-foreground rounded-full">
          {total}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm text-purple">Completed</p>
        <span className="text-xs w-14 text-center bg-foreground border-2 border-foreground rounded-full">
          {completed} of {total}
        </span>
      </div>
    </div>
  );
};

export default TaskSummary;
