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
import { Settings2, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { DEFAULT_SETTINGS_STATE } from "@/lib/constants";
import { getClonedObject } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface OptionsProps {
  onConfirm: (options: number[]) => void;
}

interface SettingsObject {
  id: string;
  type: number;
  label: string;
  description: string;
  checked: boolean;
}

const Options: React.FC<OptionsProps> = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);
  const [selected_options, setSelectedOptions] = useState<SettingsObject[]>(
    getClonedObject(DEFAULT_SETTINGS_STATE)
  );
  const [old_selected_options, setOldSelectedOptions] = useState<
    SettingsObject[]
  >(getClonedObject(DEFAULT_SETTINGS_STATE));

  const onConfirmHandler = () => {
    saveSelectedOptions();
    setOpen(false);
  };

  const saveSelectedOptions = () => {
    if (selected_options?.length) {
      const checked_options = selected_options.filter((item) => item.checked);
      setOldSelectedOptions(getClonedObject(selected_options));
      onConfirm(checked_options.map((item) => item.type));
    }
  };

  const onCheckboxChange = (id: string, value: boolean | "indeterminate") => {
    setSelectedOptions((prev) => {
      let new_list = prev.map((item) => {
        if (item.id === id && value !== "indeterminate") {
          item.checked = value;
        }
        return item;
      });
      return [...new_list];
    });
  };

  const openChangeHandler = (value: boolean) => {
    if (!value) {
      setSelectedOptions(getClonedObject(old_selected_options));
    }
    setOpen(value);
  };

  const isConfirmDisabled = (selected_options: SettingsObject[]) => {
    let count = 0;
    selected_options.forEach((item) => {
      if (item.checked) {
        count++;
      }
    });
    return count === 0;
  };

  return (
    <Dialog open={open} onOpenChange={openChangeHandler}>
      <DialogTrigger>
        <Settings2 />
      </DialogTrigger>
      <DialogContent className="dark:bg-zinc-800 dark:border-none">
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
                {index < selected_options.length - 1 && (
                  <Separator className="dark:bg-zinc-700" />
                )}
              </>
            );
          })}
          {isConfirmDisabled(selected_options) ? (
            <Alert className="dark:bg-zinc-700 bg-zinc-100 border-none mt-2">
              <Info className="h-4 w-4 " />
              <AlertDescription>
                Please select atleast one group.
              </AlertDescription>
            </Alert>
          ) : null}
        </DialogDescription>
        <DialogFooter>
          <Button
            onClick={onConfirmHandler}
            disabled={isConfirmDisabled(selected_options)}
          >
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Options;
