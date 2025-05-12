import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu.tsx";
import {CaretDown} from "@/assets/icons/common-icons.tsx";


type Option = {
    label: string;
    value: string;
};

interface DropdownMenuWrapperProps {
    options: Option[];
    selected: string;
    defaultPlaceholder?: string;
    onChange: (value: string) => void;
    triggerClasses?: string;
    contentContentClasses?: string;
    alignment?: "start" | "center" | "end"
    children?: React.ReactNode; // custom trigger content if needed
    activeOptionClass?: string
}

export default function DropdownMenuWrapper(
    {
        options,
        selected,
        onChange,
        children,
        alignment,
        triggerClasses,
        defaultPlaceholder,
        activeOptionClass,
        contentContentClasses,
    }: DropdownMenuWrapperProps) {
        const [open, setOpen] = useState(false);

        return (
            <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
                <DropdownMenuTrigger asChild>
                    <div className={`cursor-pointer flex items-center ${triggerClasses}`}>
                        {children || (
                            <>
                                <span>{options.find((item) => item.value === selected)?.label ?? defaultPlaceholder }</span>
                                <CaretDown />
                            </>
                        )}
                    </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align={alignment ?? 'start'} className={`border border-gray-800 text-white ${contentContentClasses}`}>
                    {options.map((item) => (
                        <DropdownMenuItem
                            key={item.value}
                            onSelect={() => {
                                onChange(item.value);
                                setOpen(false);
                            }}
                            className={item.value === selected ? `bg-gray-700 ${activeOptionClass}` : ''}
                        >
                            {item.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        );
}
