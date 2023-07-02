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

interface ConfirmationDialogProps extends React.PropsWithChildren {
  is_active: boolean;
  show_primary_cta?: boolean;
  show_footer?: boolean;
  title: string;
  body: string;
  classes?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  dialog_trigger?: React.ReactElement;
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (props) => {
  const {
    is_active,
    title,
    body,
    onConfirm,
    onCancel,
    dialog_trigger,
    children,
    show_footer = true,
    show_primary_cta = true,
    classes,
  } = props;
  return (
    <Dialog open={is_active} onOpenChange={onCancel}>
      <DialogTrigger>{dialog_trigger}</DialogTrigger>
      <DialogContent
        close_btn={false}
        className={`${classes} dark:bg-zinc-800 dark:border-none`}
      >
        <DialogHeader className="text-left">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{children ? children : body}</DialogDescription>

        {show_footer && (
          <DialogFooter className="flex flex-row justify-end gap-2">
            <Button variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            {show_primary_cta && <Button onClick={onConfirm}>Confirm</Button>}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
