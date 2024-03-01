"use client";

import { Input } from "@/components/ui/input";
import { useFormStatus } from "react-dom";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function FormInput(props: InputProps) {
  const { pending } = useFormStatus();

  if (pending) {
    return <Input {...props} disabled />;
  }

  return <Input {...props} />;
}
