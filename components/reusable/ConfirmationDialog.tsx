import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";

interface ConfirmationDialogProps {
  is_active: boolean;
  title: string;
  body: string;
  onConfirm: () => void;
  onCancel: () => void;
  dialog_trigger: React.ReactElement;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (props) => {
  const { is_active, title, body, onConfirm, onCancel, dialog_trigger } = props;
  return (
    <Dialog open={is_active}>
      <DialogTrigger>{dialog_trigger}</DialogTrigger>
      <DialogContent close_btn={false}>
        <DialogHeader className="text-left">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{body}</DialogDescription>

        <DialogFooter className="flex flex-row justify-end gap-2">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button onClick={onConfirm}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
