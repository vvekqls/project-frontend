import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

interface TaskCardProps {
  id: number;
  title: string;
  color: string;
  completed: boolean;
  onToggle: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  id,
  title,
  color,
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <Card className="flex items-center justify-between bg-background text-white mb-4 rounded-lg	">
      <Checkbox
        className="w-5 h-5 text-white ml-2 rounded-full	border-blue border-2"
        checked={completed}
        onCheckedChange={onToggle}
      />
      <Link key={id} className="w-11/12" href={`/edit/${id}`}>
        <CardContent className="flex items-center gap-4 p-4">
          <div className="flex items-center gap-2 w-">
            <span
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <p className={completed ? "line-through opacity-50" : ""}>
              {title}
            </p>
          </div>
        </CardContent>
      </Link>
      <button onClick={onDelete} className="text-gray hover:text-gray p-2">
        <Trash2 size={18} />
      </button>
    </Card>
  );
};

export default TaskCard;
