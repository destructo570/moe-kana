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
import {
  DEFAULT_GAME_MODE_STATE,
  DEFAULT_SETTINGS_STATE,
  TatakuMode,
} from "@/lib/constants";
import { getClonedObject } from "@/lib/utils";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SelectedSettings } from "@/models/interfaces/SeletedSettings.interface";

interface SettingsProps {
  onConfirm: (selected_settings: SelectedSettings) => void;
}

interface SettingsObject {
  id: string;
  type: number;
  value?: number;
  label: string;
  description: string;
  checked: boolean;
}

const Settings: React.FC<SettingsProps> = ({ onConfirm }) => {
  const [open, setOpen] = useState(false);
  const [selected_mode, setSelectedMode] = useState<TatakuMode>(
    TatakuMode.NORMAL
  );
  const [old_selected_mode, setOldSelectedMode] = useState<TatakuMode>(
    TatakuMode.NORMAL
  );
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
    let checked_options_list: number[] = [];
    if (selected_options?.length) {
      const checked_options = selected_options.filter((item) => item.checked);
      checked_options_list = checked_options.map((item) => item.type);
      setOldSelectedOptions(getClonedObject(selected_options));
    }
    setOldSelectedMode(selected_mode);
    onConfirm({ checked_options_list, selected_mode });
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
      setSelectedMode(old_selected_mode);
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

  const onModeChange = (value: TatakuMode) => {
    setSelectedMode(value);
  };

  return (
    <Dialog open={open} onOpenChange={openChangeHandler}>
      <DialogTrigger>
        <Button variant="ghost" size="icon">
          <Settings2 className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent
        className="dark:bg-zinc-800 dark:border-none"
        close_btn={false}
      >
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <h3 className="mt-2">Selected Mode</h3>
          <RadioGroup
            defaultValue={selected_mode}
            className="ml-2"
            onValueChange={onModeChange}
          >
            {DEFAULT_GAME_MODE_STATE.map((item, index) => {
              return (
                <>
                  <div key={item.id} className="items-top flex space-x-2 p-3">
                    <RadioGroupItem
                      id={item.id}
                      value={item.value}
                      className="mt-1"
                    />
                    <div className="grid gap-1.5 leading-none">
                      <Label
                        htmlFor={item.id}
                        className="text-sm font-medium dark:text-zinc-50 text-zinc-900"
                      >
                        {item.label}
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index < DEFAULT_GAME_MODE_STATE.length - 1 && (
                    <Separator className="dark:bg-zinc-700" />
                  )}
                </>
              );
            })}
          </RadioGroup>
          <div className="mt-10">
            <h3>Selected options</h3>
            <div className="ml-4">
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
                        <Label
                          htmlFor={item.id}
                          className="text-sm font-medium dark:text-zinc-50 text-zinc-900"
                        >
                          {item.label}
                        </Label>
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
            </div>
          </div>
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

export default Settings;
