"use client";

import React, { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Shield, Lock, Loader2, Sparkles, Scale, Clock, Check } from "lucide-react";
import confetti from "canvas-confetti";
import { tactileAudio } from "@/utils/audio";

const formSchema = z.object({
  fullName: z.string().min(3, "Please enter your full name / Ingrese su nombre completo"),
  phone: z.string().min(7, "Please provide a valid phone number / Ingrese un número de contacto válido"),
  email: z.string().email("Please provide a valid email / Ingrese un correo electrónico válido"),
  consultationType: z.string().min(1, "Please select consultation type / Seleccione el tipo de consulta"),
  situation: z.string().min(15, "Please briefly summarize your matter (min 15 chars) / Describa brevemente su situación (mín. 15 caracteres)"),
  urgency: z.enum(["critical", "standard", "advisory"]),
});

type FormValues = z.infer<typeof formSchema>;

export function ConsultationForm() {
  const { isEs } = useLanguage();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      consultationType: "capital-recovery",
      situation: "",
      urgency: "standard",
    },
    mode: "onBlur",
  });

  const nextStep = async () => {
    tactileAudio.playClick();
    if (step === 1) {
      const valid = await trigger(["fullName", "phone", "email"]);
      if (valid) setStep(2);
    } else if (step === 2) {
      const valid = await trigger(["consultationType", "urgency"]);
      if (valid) setStep(3);
    }
  };

  const prevStep = () => {
    tactileAudio.playClick();
    if (step > 1) setStep((prev) => (prev - 1) as 1 | 2 | 3);
  };

  const onSubmit = async (_data: FormValues) => {
    tactileAudio.playClick();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1200));

    const token = `WEX-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedToken(token);
    setIsSubmitting(false);

    tactileAudio.playTactileChime();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#FDE047", "#FFFFFF", "#C5A880"],
    });
  };

  const consultationOptions = [
    { value: "capital-recovery", labelEn: "Capital & Asset Recovery", labelEs: "Recuperación de Dinero / Activos" },
    { value: "strategic-claims", labelEn: "Strategic Claims & Breach of Contract", labelEs: "Reclamaciones e Incumplimientos Contractuales" },
    { value: "regulatory-procedures", labelEn: "Regulatory & Administrative Procedures", labelEs: "Trámites Jurídicos y Regulatorios" },
    { value: "corporate-advisory", labelEn: "Corporate & Risk Advisory", labelEs: "Asesoría Jurídica Corporativa" },
    { value: "trial-defense", labelEn: "Trial Defense & Litigation", labelEs: "Representación Legal en Estrados" },
    { value: "negotiation", labelEn: "Confidential Settlement & Conciliation", labelEs: "Negociación y Conciliación Confidencial" },
    { value: "document-review", labelEn: "Contractual Drafting & Shielding", labelEs: "Elaboración y Blindaje Contractual" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto glass-panel p-8 sm:p-12 lg:p-14 rounded-none border-2 border-[#D4AF37]/50 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.2)] relative bg-[#141A27]/95">
      {/* Top Gold Bar Highlight */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#B38C2A]" />

      {/* Trust Guarantees Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-8 mb-8 border-b border-white/10 text-[11px] font-mono uppercase tracking-wider text-[#CBD5E1]">
        <div className="flex items-center gap-2 text-[#D4AF37]">
          <Shield className="w-4 h-4 flex-shrink-0" />
          <span>{isEs ? "SECRETO PROFESIONAL GARANTIZADO" : "ATTORNEY PRIVILEGE GUARANTEED"}</span>
        </div>
        <div className="flex items-center gap-2 text-[#E2E8F0]">
          <Clock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
          <span>{isEs ? "RESPUESTA EN MENOS DE 12H" : "DIRECT 12-HOUR COUNSEL REVIEW"}</span>
        </div>
        <div className="flex items-center gap-2 text-[#E2E8F0]">
          <Scale className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
          <span>{isEs ? "EVALUACIÓN PRELIMINAR RESERVADA" : "CONFIDENTIAL EVALUATION"}</span>
        </div>
      </div>

      {/* Progress Header */}
      {!submittedToken && (
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isEs ? "PORTAL DE INGRESO CONFIDENCIAL" : "CLIENT BRIEFING INTAKE"}</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFFFFF] mt-1">
                {isEs ? "Inicie su Evaluación Jurídica" : "Submit Your Confidential Case"}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#D4AF37] font-semibold bg-[#111622] px-3 py-1.5 border border-[#D4AF37]/30 self-start sm:self-auto">
              {isEs ? `PASO 0${step} DE 03` : `STEP 0${step} OF 03`}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { num: 1, labelEn: "IDENTIFIERS", labelEs: "DATOS" },
              { num: 2, labelEn: "DISCIPLINE", labelEs: "MATERIA" },
              { num: 3, labelEn: "SUMMARY", labelEs: "SITUACIÓN" },
            ].map((s) => (
              <div key={s.num} className="flex flex-col gap-1.5">
                <div
                  className={`h-1.5 transition-all duration-500 ${
                    s.num <= step
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#FDE047]"
                      : "bg-white/10"
                  }`}
                />
                <span
                  className={`text-[9px] font-mono uppercase tracking-widest ${
                    s.num === step ? "text-[#D4AF37] font-bold" : "text-[#64748B]"
                  }`}
                >
                  0{s.num} // {isEs ? s.labelEs : s.labelEn}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submitted Confirmation State */}
      {submittedToken ? (
        <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-500">
          <div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] mx-auto flex items-center justify-center bg-[#D4AF37]/15 text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFFFFF]">
            {isEs ? "Expediente Recibido Bajo Estricta Reserva" : "Confidential Brief Received Under Privilege"}
          </h3>

          <p className="text-base text-[#CBD5E1] max-w-xl mx-auto font-light leading-relaxed">
            {isEs
              ? "Su solicitud ha sido radicada de forma encriptada y asignada al socio director. Un abogado principal revisará su caso y se comunicará directamente a sus coordenadas dentro de las próximas 12 horas."
              : "Your dossier has been securely encrypted and routed to senior trial counsel. A partner will review your standing and initiate contact through your verified coordinates within 12 hours."}
          </p>

          <div className="p-5 bg-[#0E131E] border-2 border-[#D4AF37] inline-block text-xs font-mono text-[#F1F5F9] shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <span className="text-[#CBD5E1] mr-3">{isEs ? "CÓDIGO DE SEGUIMIENTO:" : "DOSSIER TOKEN:"}</span>
            <span className="text-[#FDE047] font-bold text-base tracking-widest">{submittedToken}</span>
          </div>

          <div className="pt-6">
            <button
              onClick={() => {
                setSubmittedToken(null);
                setStep(1);
              }}
              className="text-xs font-mono text-[#CBD5E1] hover:text-[#D4AF37] underline uppercase tracking-widest"
            >
              {isEs ? "Radicar otra consulta" : "Submit another briefing"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* STEP 1: IDENTITY & CONTACT */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label className="block text-xs font-mono tracking-wider text-[#F1F5F9] uppercase font-semibold">
                  {isEs ? "Nombre Completo o Razón Social *" : "Full Legal Name or Enterprise Entity *"}
                </label>
                <input
                  {...register("fullName")}
                  placeholder={isEs ? "Ej. Carlos E. Mendoza / Consorcio Andino" : "e.g. Jonathan Vance / Meridian Capital Corp."}
                  className="w-full px-5 py-4 bg-[#0E131E] border border-white/20 focus:border-[#D4AF37] text-base text-[#FFFFFF] placeholder:text-[#64748B] outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                />
                {errors.fullName && (
                  <span className="text-xs text-rose-400 font-mono">{errors.fullName.message}</span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-mono tracking-wider text-[#F1F5F9] uppercase font-semibold">
                    {isEs ? "Teléfono Directo / WhatsApp *" : "Direct Telephone / WhatsApp *"}
                  </label>
                  <input
                    {...register("phone")}
                    placeholder="+1 (555) 234-5678"
                    className="w-full px-5 py-4 bg-[#0E131E] border border-white/20 focus:border-[#D4AF37] text-base text-[#FFFFFF] placeholder:text-[#64748B] outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  />
                  {errors.phone && (
                    <span className="text-xs text-rose-400 font-mono">{errors.phone.message}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono tracking-wider text-[#F1F5F9] uppercase font-semibold">
                    {isEs ? "Correo Electrónico Reservado *" : "Corporate / Secure Email *"}
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="counsel@enterprise.com"
                    className="w-full px-5 py-4 bg-[#0E131E] border border-white/20 focus:border-[#D4AF37] text-base text-[#FFFFFF] placeholder:text-[#64748B] outline-none transition-all shadow-inner focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 font-mono">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#FDE047] hover:to-[#D4AF37] text-[#0B0F19] text-xs font-mono tracking-widest uppercase font-bold transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  <span>{isEs ? "CONTINUAR A LA MATERIA" : "PROCEED TO MATTER"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: LEGAL DISCIPLINE & URGENCY */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label className="block text-xs font-mono tracking-wider text-[#F1F5F9] uppercase font-semibold">
                  {isEs ? "Disciplina Jurídica Requerida *" : "Required Legal Pillar *"}
                </label>
                <select
                  {...register("consultationType")}
                  className="w-full px-5 py-4 bg-[#0E131E] border border-white/20 focus:border-[#D4AF37] text-base text-[#FFFFFF] outline-none transition-all cursor-pointer"
                >
                  {consultationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#0E131E] text-[#FFFFFF]">
                      {isEs ? opt.labelEs : opt.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 pt-2">
                <label className="block text-xs font-mono tracking-wider text-[#F1F5F9] uppercase font-semibold">
                  {isEs ? "Nivel de Urgencia Procesal" : "Procedural Urgency Level"}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { value: "critical", labelEn: "Critical (Seizure/Deadline)", labelEs: "Crítico (Embargo/Términos)" },
                    { value: "standard", labelEn: "Standard (Active Dispute)", labelEs: "Estándar (Litigio Activo)" },
                    { value: "advisory", labelEn: "Strategic / Preventative", labelEs: "Preventivo / Asesoría" },
                  ].map((lvl) => (
                    <label
                      key={lvl.value}
                      className={`p-4 border cursor-pointer flex flex-col justify-between transition-all ${
                        watch("urgency") === lvl.value
                          ? "border-[#D4AF37] bg-[#1C2536] shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                          : "border-white/15 bg-[#0E131E] hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        value={lvl.value}
                        {...register("urgency")}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-[#D4AF37] uppercase">PRIORITY</span>
                        {watch("urgency") === lvl.value && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#FFFFFF]">
                        {isEs ? lvl.labelEs : lvl.labelEn}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-xs font-mono text-[#CBD5E1] hover:text-[#D4AF37] uppercase tracking-wider"
                >
                  ← {isEs ? "VOLVER" : "BACK"}
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#E5C07B] hover:from-[#FDE047] hover:to-[#D4AF37] text-[#0B0F19] text-xs font-mono tracking-widest uppercase font-bold transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.3)] cursor-pointer"
                >
                  <span>{isEs ? "CONTINUAR AL EXPEDIENTE" : "PROCEED TO BRIEF"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: FACTS & SUBMISSION */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="space-y-2">
                <label className="block text-xs font-mono tracking-wider text-[#F1F5F9] uppercase font-semibold">
                  {isEs ? "Cuéntenos brevemente su situación *" : "Briefly outline your situation and counterparties *"}
                </label>
                <textarea
                  {...register("situation")}
                  rows={4}
                  placeholder={
                    isEs
                      ? "Describa los hechos principales, montos o derechos en controversia, fechas críticas o medidas que requiere..."
                      : "Outline key dispute facts, financial amounts at stake, critical deadlines, or immediate relief required..."
                  }
                  className="w-full px-5 py-4 bg-[#0E131E] border border-white/20 focus:border-[#D4AF37] text-base text-[#FFFFFF] placeholder:text-[#64748B] outline-none transition-all resize-none shadow-inner focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                />
                {errors.situation && (
                  <span className="text-xs text-rose-400 font-mono">{errors.situation.message}</span>
                )}
              </div>

              <div className="flex items-center gap-3 p-3.5 bg-[#0E131E] border border-[#D4AF37]/30 text-xs font-mono text-[#CBD5E1]">
                <Lock className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  {isEs
                    ? "Esta comunicación se encuentra amparada por secreto profesional y estricta confidencialidad fiduciaria."
                    : "Transmission is legally protected under strict attorney-client privilege."}
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-xs font-mono text-[#CBD5E1] hover:text-[#D4AF37] uppercase tracking-wider"
                >
                  ← {isEs ? "VOLVER" : "BACK"}
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FDE047] to-[#D4AF37] hover:brightness-110 disabled:opacity-50 text-[#0B0F19] text-xs font-mono tracking-widest uppercase font-bold transition-all flex items-center gap-2 shadow-[0_0_35px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{isEs ? "ENCRIPTANDO EXPEDIENTE..." : "TRANSMITTING BRIEF..."}</span>
                    </>
                  ) : (
                    <>
                      <span>{isEs ? "SOLICITAR ASESORÍA" : "SUBMIT CONFIDENTIAL BRIEF"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
