"use client";

import * as React from "react";
import { landing } from "@/content/landing";
import { mailLink } from "@/lib/links";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { CheckCircle2, Copy, Mail } from "lucide-react";

type FormState = {
  fullName: string;
  organization: string;
  role: string;
  email: string;
  phone: string;
  propertyType: string;
  location: string;
  interests: string[];
  meetingPref: string;
  message: string;
  honey: string; // honeypot
};

type Errors = Partial<Record<keyof FormState, string>> & { interests?: string };

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function cleanPhone(value: string) {
  return value.replace(/[^\d+]/g, "").trim();
}

function buildEmailBody(s: FormState) {
  const lines = [
    `Nombre: ${s.fullName}`,
    `Organización / Inmueble: ${s.organization}`,
    `Rol: ${s.role}`,
    `Email: ${s.email}`,
    `Teléfono: ${s.phone}`,
    `Tipo de inmueble: ${s.propertyType}`,
    `Ubicación: ${s.location}`,
    `Servicios de interés: ${s.interests.length ? s.interests.join(", ") : "-"}`,
    `Preferencia de atención: ${s.meetingPref}`,
    `Mensaje: ${s.message ? s.message : "-"}`,
  ];

  return (
    `Hola Grupo MG,\n\n` +
    `Me gustaría solicitar una cotización.\n\n` +
    lines.join("\n") +
    `\n\nGracias.`
  );
}

export default function ContactForm() {
  const [state, setState] = React.useState<FormState>({
    fullName: "",
    organization: "",
    role: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    interests: [],
    meetingPref: "",
    message: "",
    honey: "",
  });

  const [errors, setErrors] = React.useState<Errors>({});
  const [mailPreview, setMailPreview] = React.useState<string>("");
  const [submitted, setSubmitted] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (key === "interests") setErrors((prev) => ({ ...prev, interests: undefined }));
  }

  function toggleInterest(label: string) {
    setState((prev) => {
      const exists = prev.interests.includes(label);
      const next = exists
        ? prev.interests.filter((x) => x !== label)
        : [...prev.interests, label];
      return { ...prev, interests: next };
    });
    setErrors((prev) => ({ ...prev, interests: undefined }));
  }

  function validate(s: FormState): Errors {
    const e: Errors = {};

    if (s.honey) {
      e.honey = "Error de validación.";
      return e;
    }

    if (!s.fullName.trim()) e.fullName = "Indica tu nombre y apellido.";
    if (!s.organization.trim()) e.organization = "Indica el nombre del inmueble o empresa.";
    if (!s.role) e.role = "Selecciona tu rol.";
    if (!s.email.trim() || !isEmail(s.email)) e.email = "Indica un email válido.";
    if (!cleanPhone(s.phone)) e.phone = "Indica un teléfono válido.";
    if (!s.propertyType) e.propertyType = "Selecciona el tipo de inmueble.";
    if (!s.location.trim()) e.location = "Indica una ubicación (ej. ciudad/área).";
    if (!s.meetingPref) e.meetingPref = "Selecciona una preferencia de atención.";
    if (!s.interests.length) e.interests = "Selecciona al menos un servicio de interés.";

    return e;
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // no-op
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const nextErrors = validate(state);
    setErrors(nextErrors);

    const hasErrors = Object.values(nextErrors).some(Boolean);
    if (hasErrors) return;

    const subject = landing.mailto.subject;
    const body = buildEmailBody({
      ...state,
      phone: cleanPhone(state.phone),
      email: state.email.trim(),
    });

    setMailPreview(body);
    setSubmitted(true);

    const href = mailLink(landing.mailto.to, subject, body);
    window.location.href = href;
  }

  const errId = (name: keyof FormState | "interests") => `${String(name)}-error`;

  return (
    <div className="surface p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-display text-xl font-semibold tracking-tight">
            {landing.form.title}
          </div>
          <p className="mt-2 text-sm text-mutedForeground leading-6">
            {landing.form.subtitle}
          </p>
        </div>
        <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-2xl border bg-white">
          <Mail className="h-5 w-5 text-slate-700" />
        </div>
      </div>

      <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
        {/* Honeypot */}
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="honey">No completar</Label>
          <Input
            id="honey"
            value={state.honey}
            onChange={(ev) => setField("honey", ev.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="fullName">Nombre y apellido *</Label>
            <Input
              id="fullName"
              value={state.fullName}
              onChange={(ev) => setField("fullName", ev.target.value)}
              placeholder="Ej. Ana Pérez"
              required
              autoComplete="name"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? errId("fullName") : undefined}
            />
            {errors.fullName ? (
              <p id={errId("fullName")} className="text-xs text-red-600">
                {errors.fullName}
              </p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="organization">Inmueble / Empresa *</Label>
            <Input
              id="organization"
              value={state.organization}
              onChange={(ev) => setField("organization", ev.target.value)}
              placeholder="Ej. PH Elite 500 / Plaza XYZ"
              required
              autoComplete="organization"
              aria-invalid={!!errors.organization}
              aria-describedby={errors.organization ? errId("organization") : undefined}
            />
            {errors.organization ? (
              <p id={errId("organization")} className="text-xs text-red-600">
                {errors.organization}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="role">Rol *</Label>
            <div className="relative">
              <Select
                id="role"
                value={state.role}
                onChange={(ev) => setField("role", ev.target.value)}
                required
                aria-invalid={!!errors.role}
                aria-describedby={errors.role ? errId("role") : undefined}
              >
                <option value="">Seleccionar</option>
                {landing.form.roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                ▼
              </div>
            </
