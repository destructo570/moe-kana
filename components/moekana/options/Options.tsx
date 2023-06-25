import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Characters, DEFAULT_SETTINGS_STATE } from "@/lib/constants";

interface OptionsProps {
  onConfirm: (options: number[]) => void;
}

const Options: React.FC<OptionsProps> = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);
  const [selected_options, setSelectedOptions] = useState([
    ...DEFAULT_SETTINGS_STATE,
  ]);

  const onOpenChange = (value: boolean) => {
    if (!value) {
      saveSelectedOptions();
    }
    setOpen(value);
  };

  const saveSelectedOptions = () => {
    if (selected_options?.length) {
      const checked_options = selected_options.filter((item) => item.checked);
      onConfirm(checked_options.map((item) => item.type));
    }
  };

  const onCheckboxChange = (id: string, value: boolean | "indeterminate") => {
    setSelectedOptions((prev) => {
      return prev.map((item) => {
        if (item.id === id && value !== "indeterminate") {
          item.checked = value;
        }
        return item;
      });
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger>
        <Settings2 />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {selected_options.map((item, index) => {
            return (
              <>
                <div key={item.id} className="items-top flex space-x-2 p-3">
                  <Checkbox
                    id={item.id}
                    onCheckedChange={onCheckboxChange.bind(null, item.id)}
                    checked={item.checked}
                    className="mt-1"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor={item.id}
                      className="text-sm font-medium dark:text-zinc-50 text-zinc-900"
                    >
                      {item.label}
                    </label>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
                {index < selected_options.length - 1 && <Separator />}
              </>
            );
          })}
        </DialogDescription>
        <DialogFooter>
          <Button onClick={onOpenChange.bind(null, false)}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Options;
