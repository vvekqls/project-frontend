import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import clsx from "clsx";

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
  completed,
  onToggle,
  onDelete,
}) => {
  return (
    <Card className="flex items-center justify-between bg-foreground text-white mb-4 rounded-lg	border-foreground border-2">
      <Checkbox
        className={clsx(
          "w-5 h-5 text-white ml-2 rounded-full	border-blue border-2",
          completed ? "border-purple" : "border-blue",
          completed && "bg-purple"
        )}
        checked={completed}
        onCheckedChange={onToggle}
      />
      <Link key={id} className="w-11/12 overflow-hidden" href={`/edit/${id}`}>
        <CardContent className="flex items-center gap-4 p-4">
          <div className="items-center gap-2 w-">
            <p className={completed ? "line-through opacity-50" : ""}>
              {title}
            </p>
          </div>
        </CardContent>
      </Link>
      <Dialog>
        <DialogTrigger className="text-gray hover:text-gray p-2">
          <Trash2 size={18} />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              task.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="secondary" className="bg-">
              Close
            </Button>
            <Button
              type="submit"
              className="text-whit-500 bg-red-500"
              onClick={onDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default TaskCard;
