"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

type FormButtonProps = {
  children: React.ReactNode;
};

export default function FormButton({ children }: FormButtonProps) {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    );
  }

  return <Button type="submit">{children}</Button>;
}
