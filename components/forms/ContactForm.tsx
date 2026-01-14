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
      // bot
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
      // no-op (algunos navegadores/permiso)
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

      <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
        {/* Honeypot */}
        <div className="hidden">
          <Label htmlFor="honey">No completar</Label>
          <Input
            id="honey"
            value={state.honey}
            onChange={(ev) => setField("honey", ev.target.value)}
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
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName ? (
              <p className="text-xs text-red-600">{errors.fullName}</p>
            ) : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="organization">Inmueble / Empresa *</Label>
            <Input
              id="organization"
              value={state.organization}
              onChange={(ev) => setField("organization", ev.target.value)}
              placeholder="Ej. PH Elite 500 / Plaza XYZ"
              aria-invalid={!!errors.organization}
            />
            {errors.organization ? (
              <p className="text-xs text-red-600">{errors.organization}</p>
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
                aria-invalid={!!errors.role}
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
            </div>
            {errors.role ? <p className="text-xs text-red-600">{errors.role}</p> : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="propertyType">Tipo de inmueble *</Label>
            <div className="relative">
              <Select
                id="propertyType"
                value={state.propertyType}
                onChange={(ev) => setField("propertyType", ev.target.value)}
                aria-invalid={!!errors.propertyType}
              >
                <option value="">Seleccionar</option>
                {landing.form.propertyTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </Select>
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                ▼
              </div>
            </div>
            {errors.propertyType ? (
              <p className="text-xs text-red-600">{errors.propertyType}</p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={state.email}
              onChange={(ev) => setField("email", ev.target.value)}
              placeholder="tu@correo.com"
              aria-invalid={!!errors.email}
            />
            {errors.email ? <p className="text-xs text-red-600">{errors.email}</p> : null}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">Teléfono *</Label>
            <Input
              id="phone"
              value={state.phone}
              onChange={(ev) => setField("phone", ev.target.value)}
              placeholder="6983-3111"
              aria-invalid={!!errors.phone}
            />
            {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="location">Ubicación (ciudad/área) *</Label>
          <Input
            id="location"
            value={state.location}
            onChange={(ev) => setField("location", ev.target.value)}
            placeholder="Ej. Ciudad de Panamá / Tumba Muerto / Costa del Este"
            aria-invalid={!!errors.location}
          />
          {errors.location ? <p className="text-xs text-red-600">{errors.location}</p> : null}
        </div>

        <div className="grid gap-2">
          <Label>Servicios de interés *</Label>
          <div className={cn("rounded-3xl border bg-white p-4", errors.interests ? "border-red-300" : "")}>
            <div className="grid gap-3 sm:grid-cols-2">
              {landing.form.interestOptions.map((opt) => (
                <label key={opt} className="flex items-start gap-3 text-sm leading-6">
                  <Checkbox
                    checked={state.interests.includes(opt)}
                    onChange={() => toggleInterest(opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>
          {errors.interests ? <p className="text-xs text-red-600">{errors.interests}</p> : null}
        </div>

        <div className="grid gap-2">
          <Label>Preferencia de atención *</Label>
          <div className={cn("rounded-3xl border bg-white p-4", errors.meetingPref ? "border-red-300" : "")}>
            <div className="flex flex-col sm:flex-row gap-3">
              {landing.form.meetingPrefs.map((p) => (
                <label key={p} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="meetingPref"
                    className="h-4 w-4 accent-[hsl(var(--primary))]"
                    checked={state.meetingPref === p}
                    onChange={() => setField("meetingPref", p)}
                  />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>
          {errors.meetingPref ? (
            <p className="text-xs text-red-600">{errors.meetingPref}</p>
          ) : null}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Mensaje (opcional)</Label>
          <Textarea
            id="message"
            value={state.message}
            onChange={(ev) => setField("message", ev.target.value)}
            placeholder="Cuéntanos el contexto o urgencia. Ej: mantenimiento, diagnóstico, administración, etc."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" className="gap-2">
            <Mail className="h-4 w-4" />
            {landing.form.submitLabel}
          </Button>

          {submitted && mailPreview ? (
            <Button
              type="button"
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => copyToClipboard(mailPreview)}
            >
              <Copy className="h-4 w-4" />
              {copied ? "Copiado" : "Copiar resumen"}
            </Button>
          ) : null}
        </div>

        {submitted && mailPreview ? (
          <div className="mt-2 rounded-3xl border bg-white p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-slate-700" />
              <div>
                <div className="font-display font-semibold tracking-tight">
                  {landing.form.successTitle}
                </div>
                <p className="mt-1 text-sm text-mutedForeground leading-6">
                  {landing.form.successSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Label className="text-xs text-mutedForeground">Resumen generado</Label>
              <pre className="mt-2 whitespace-pre-wrap rounded-3xl border bg-slate-50 p-4 text-xs leading-5 text-slate-800">
{mailPreview}
              </pre>
            </div>
          </div>
        ) : null}
      </form>

      <p className="mt-5 text-xs text-mutedForeground leading-5">
        Al enviar, se abre tu aplicación de correo con un mensaje prellenado a{" "}
        <span className="text-slate-900">{landing.mailto.to}</span>.
      </p>
    </div>
  );
}
