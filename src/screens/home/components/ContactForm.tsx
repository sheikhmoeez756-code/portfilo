"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuCircleAlert, LuCircleCheck, LuLoaderCircle, LuSend } from "react-icons/lu";
import { t } from "@i18n";
import { EMAIL_REGEX } from "@constants";
import { sendContactMessage, type ContactPayload } from "@services";
import { Button } from "@components";
import { cn } from "@utils";

type Status = "idle" | "sending" | "success" | "error";
type Field = keyof ContactPayload;
type Errors = Partial<Record<Field, string>>;

const EMPTY: ContactPayload = { name: "", email: "", subject: "", message: "" };

const validate = (values: ContactPayload): Errors => {
  const errors: Errors = {};
  (Object.keys(values) as Field[]).forEach((field) => {
    if (!values[field].trim()) errors[field] = t.contact.form.required;
  });
  if (values.email && !EMAIL_REGEX.test(values.email)) errors.email = t.contact.form.invalidEmail;
  return errors;
};

function FloatingField({
  name, label, value, error, multiline, type = "text", autoComplete, onChange,
}: {
  name: Field;
  label: string;
  value: string;
  error?: string;
  multiline?: boolean;
  type?: string;
  autoComplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const shared = {
    id: name,
    name,
    value,
    onChange,
    placeholder: " ",
    autoComplete,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${name}-error` : undefined,
    className: cn(
      "peer w-full rounded-2xl border bg-bg px-4 pb-2.5 pt-6 text-[15px] outline-none transition-colors",
      "focus:border-accent-text",
      error ? "border-red-500/70" : "border-border hover:border-border-strong",
    ),
  };

  return (
    <div className="relative">
      {multiline ? <textarea rows={5} {...shared} className={cn(shared.className, "resize-none")} /> : <input type={type} {...shared} />}
      <label
        htmlFor={name}
        className={cn(
          "pointer-events-none absolute left-4 top-2 text-xs text-subtle transition-all",
          "peer-placeholder-shown:top-4 peer-placeholder-shown:text-[15px]",
          "peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent-text",
        )}
      >
        {label}
      </label>
      {error && (
        <p id={`${name}-error`} className="mt-1.5 pl-1 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as Field]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    try {
      await sendContactMessage(values);
      setStatus("success");
      setValues(EMPTY);
    } catch {
      setStatus("error");
    }
  };

  const { form } = t.contact;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FloatingField name="name" label={form.name} value={values.name} error={errors.name} autoComplete="name" onChange={handleChange} />
        <FloatingField name="email" type="email" label={form.email} value={values.email} error={errors.email} autoComplete="email" onChange={handleChange} />
      </div>
      <FloatingField name="subject" label={form.subject} value={values.subject} error={errors.subject} onChange={handleChange} />
      <FloatingField name="message" label={form.message} value={values.message} error={errors.message} multiline onChange={handleChange} />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={status === "sending"} magnetic={false} className="w-full sm:w-auto">
          {status === "sending" ? (
            <>
              <LuLoaderCircle className="size-4 animate-spin" />
              {form.sending}
            </>
          ) : (
            <>
              {form.submit}
              <LuSend className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </>
          )}
        </Button>

        <div aria-live="polite" className="min-h-6">
          <AnimatePresence mode="wait">
            {(status === "success" || status === "error") && (
              <motion.p
                key={status}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={cn("flex items-center gap-2 text-sm", status === "success" ? "text-accent-text" : "text-red-500")}
              >
                {status === "success" ? <LuCircleCheck className="size-4" /> : <LuCircleAlert className="size-4" />}
                {status === "success" ? form.success : form.error}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}
