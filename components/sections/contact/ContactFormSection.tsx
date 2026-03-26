"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageCircle,
  Mail,
  MapPin,
  Share2,
  Clock,
  CheckCircle2,
  Instagram,
  Facebook,
} from "lucide-react";
import { CONTACT } from "@/lib/constants";

const CONTACT_CARDS = [
  {
    type: "link",
    href: "https://wa.me/917032035976",
    target: "_blank",
    icon: MessageCircle,
    label: "WHATSAPP",
    value: "+91 70320 35976",
    subValue: "Typically replies within 2 hours",
    pulseDot: true,
  },
  {
    type: "link",
    href: "mailto:rjsunsolgreenenergy2024@gmail.com",
    icon: Mail,
    label: "EMAIL",
    value: "rjsunsolgreenenergy2024@gmail.com",
    subValue: "For formal inquiries and documents",
    pulseDot: false,
  },
  {
    type: "card",
    icon: MapPin,
    label: "OFFICE",
    value: "Kangeyam, Tiruppur",
    subValue: "274B, Tiruppur Road, Tamil Nadu – 638701",
    pulseDot: false,
  },
  {
    type: "social",
    icon: Share2,
    label: "FOLLOW US",
    value: "Instagram & Facebook",
    subValue: "@rjsunsolgreenenergy",
    instagram: "https://www.instagram.com/rjsunsolgreenenergy?igsh=MXdzeW5obzA2cDE5Mg%3D%3D",
    facebook: "https://www.facebook.com/people/RJ-Sunsol-green-energy/61576281566315/",
  },
];

const PROJECT_TYPES = [
  "Residential Rooftop",
  "Commercial Rooftop",
  "Utility Scale (Ground Mount)",
  "Industrial Rooftop",
  "O&M / Maintenance",
  "Other",
];

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  location: "",
  projectType: "",
  capacity: "",
  message: "",
};

function validateForm(
  data: typeof initialFormData
): Record<string, string> {
  const err: Record<string, string> = {};
  if (!data.name.trim()) err.name = "Required";
  if (!data.phone.trim()) err.phone = "Required";
  else if (data.phone.replace(/\D/g, "").length < 10)
    err.phone = "Enter at least 10 digits";
  if (data.email.trim()) {
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(data.email)) err.email = "Invalid email";
  }
  if (!data.location.trim()) err.location = "Required";
  if (!data.projectType.trim()) err.projectType = "Required";
  return err;
}

export default function ContactFormSection() {
  const { ref: leftRef, inView: leftInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback(
    (field: keyof typeof initialFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) setErrors((e) => ({ ...e, [field]: "" }));
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const errs = validateForm(formData);
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        return;
      }
      
      setIsSubmitting(true);
      
      const message = `Hi RJ Sunsol! I'd like to request a free quote.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || "Not provided"}
*Location:* ${formData.location}
*Project Type:* ${formData.projectType}
*Capacity:* ${formData.capacity || "Not specified"}
*Message:* ${formData.message || "No additional details"}

Sent from rjsunsol.com`;
      const encoded = encodeURIComponent(message);
      const url = `https://wa.me/917032035976?text=${encoded}`;
      
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => window.open(url, "_blank"), 800);
      }, 1000);
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitted(false);
  }, []);

  return (
    <section
      id="get-quote"
      className="py-[100px] pb-[120px]"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container-custom">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-x-20 gap-y-16 lg:grid-cols-2 lg:gap-x-20">
          {/* Left column — contact info cards */}
          <div
            ref={leftRef}
            className="flex flex-col lg:min-w-0"
          >
            <span
              className="mb-2 font-rajdhani text-[12px] font-semibold uppercase tracking-[0.15em]"
              style={{ color: "var(--accent)" }}
            >
              REACH US DIRECTLY
            </span>
            <h2
              className="mb-2 font-rajdhani text-[32px] font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Always on.
            </h2>
            <p
              className="mb-10 font-dmsans text-[14px] leading-[1.7]"
              style={{ color: "var(--text-muted)" }}
            >
              We&apos;re a lean team that moves fast. WhatsApp is the quickest
              way to reach us.
            </p>

            <div className="flex flex-col gap-4">
              {CONTACT_CARDS.map((card, i) => {
                const Icon = card.icon;
                const content = (
                  <>
                    <div
                      className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        background: "var(--bg-icon)",
                        borderColor: "var(--border-accent)",
                      }}
                    >
                      <Icon size={22} style={{ color: "var(--accent)" }} />
                    </div>
                    <div className="flex-1">
                      <div
                        className="mb-1 font-dmsans text-[11px] font-medium uppercase tracking-[0.1em]"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {card.label}
                      </div>
                      <div
                        className="font-rajdhani text-[17px] font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {card.value}
                      </div>
                      {card.subValue && (
                        <div
                          className="font-dmsans text-[13px]"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {card.subValue}
                        </div>
                      )}
                      {card.type === "social" && "instagram" in card && (
                        <div className="mt-3 flex gap-2">
                          <a
                            href={card.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-lg border transition-colors hover:bg-[#E1306C] hover:border-[#E1306C]"
                            style={{
                              background: "var(--bg-icon)",
                              borderColor: "var(--border-accent)",
                            }}
                            aria-label="Instagram"
                          >
                            <Instagram size={18} className="text-white" />
                          </a>
                          <a
                            href={card.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-11 w-11 items-center justify-center rounded-lg border transition-colors hover:bg-[#1877F2] hover:border-[#1877F2]"
                            style={{
                              background: "var(--bg-icon)",
                              borderColor: "var(--border-accent)",
                            }}
                            aria-label="Facebook"
                          >
                            <Facebook size={18} className="text-white" />
                          </a>
                        </div>
                      )}
                    </div>
                    {card.pulseDot && (
                      <span
                        className="h-2 w-2 flex-shrink-0 rounded-full bg-[#25D366] animate-pulse"
                      />
                    )}
                  </>
                );

                const cardClass =
                  "flex items-center gap-4 rounded-2xl border p-5 transition-all duration-300 ease-out hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] hover:translate-x-1 shadow-[var(--shadow-card)]";
                const cardStyle = {
                  background: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                };

                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={
                      leftInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -24 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: 0.1 * i,
                    }}
                  >
                    {card.type === "link" && "href" in card ? (
                      <a
                        href={card.href}
                        target={card.target}
                        rel="noopener noreferrer"
                        className={cardClass}
                        style={cardStyle}
                      >
                        {content}
                      </a>
                    ) : (
                      <div className={cardClass} style={cardStyle}>
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={
                leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }
              }
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.5,
              }}
              className="mt-6 flex items-center gap-3 rounded-xl border px-5 py-3.5"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-accent)",
              }}
            >
              <Clock size={18} style={{ color: "var(--accent)" }} />
              <div>
                <div
                  className="font-dmsans text-[12px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  Average response time
                </div>
                <div
                  className="font-rajdhani text-[16px] font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Under 2 hours
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right column — form */}
          <div className="flex min-h-full flex-col lg:min-w-0">
            <div
              className="relative flex min-h-full flex-col overflow-hidden rounded-3xl border p-10 shadow-[var(--shadow-card)] lg:p-12"
              style={{
                background: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              <div
                className="absolute left-0 right-0 top-0 h-0.5"
                style={{ background: "var(--gradient-top-accent)" }}
              />
              <div
                className="pointer-events-none absolute -right-[60px] -top-[60px] h-[200px] w-[200px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--accent-rgb), 0.08) 0%, transparent 70%)",
                }}
              />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="py-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -30 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full border-2"
                    style={{
                      background: "rgba(var(--accent-rgb), 0.12)",
                      borderColor: "var(--accent)",
                    }}
                  >
                    <CheckCircle2
                      size={36}
                      style={{ color: "var(--accent)" }}
                    />
                  </motion.div>
                  <h3
                    className="mb-3 font-rajdhani text-[28px] font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Opening WhatsApp...
                  </h3>
                  <p
                    className="mx-auto mb-8 max-w-[360px] font-dmsans text-[14px] leading-[1.7]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Your message has been prepared. WhatsApp is opening now —
                    just hit send!
                  </p>
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    whileTap={{ scale: 0.95 }}
                    className="font-dmsans text-[14px] underline decoration-current underline-offset-2 transition-colors hover:text-[var(--accent-hover)]"
                    style={{ color: "var(--accent)" }}
                  >
                    Send Another Inquiry
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="mb-1.5 font-rajdhani text-[26px] font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Request a Free Quote
                  </h3>
                  <p
                    className="mb-8 font-dmsans text-[14px] leading-[1.6]"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Fill in your project details and we&apos;ll send you a
                    response on WhatsApp.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          className="mb-2 block font-dmsans text-[13px] font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Full Name <span style={{ color: "var(--accent)", marginLeft: 2 }}>*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          aria-required="true"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="w-full rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: errors.name ? "#EF4444" : "var(--border-color)",
                            color: "var(--text-primary)",
                            boxShadow: errors.name
                              ? "0 0 0 3px rgba(239,68,68,0.12)"
                              : undefined,
                          }}
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1.5 font-dmsans text-[12px] text-[#EF4444]" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="mb-2 block font-dmsans text-[13px] font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Phone Number <span style={{ color: "var(--accent)", marginLeft: 2 }}>*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                          aria-required="true"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className="w-full rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: errors.phone ? "#EF4444" : "var(--border-color)",
                            color: "var(--text-primary)",
                            boxShadow: errors.phone
                              ? "0 0 0 3px rgba(239,68,68,0.12)"
                              : undefined,
                          }}
                        />
                        {errors.phone && (
                          <p id="phone-error" className="mt-1.5 font-dmsans text-[12px] text-[#EF4444]" role="alert">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          className="mb-2 block font-dmsans text-[13px] font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="w-full rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: errors.email ? "#EF4444" : "var(--border-color)",
                            color: "var(--text-primary)",
                            boxShadow: errors.email
                              ? "0 0 0 3px rgba(239,68,68,0.12)"
                              : undefined,
                          }}
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1.5 font-dmsans text-[12px] text-[#EF4444]" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="mb-2 block font-dmsans text-[13px] font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Location / State <span style={{ color: "var(--accent)", marginLeft: 2 }}>*</span>
                        </label>
                        <input
                          id="location"
                          name="location"
                          type="text"
                          placeholder="e.g. Tamil Nadu, Karnataka"
                          value={formData.location}
                          onChange={(e) =>
                            handleChange("location", e.target.value)
                          }
                          aria-required="true"
                          aria-invalid={!!errors.location}
                          aria-describedby={errors.location ? "location-error" : undefined}
                          className="w-full rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: errors.location ? "#EF4444" : "var(--border-color)",
                            color: "var(--text-primary)",
                            boxShadow: errors.location
                              ? "0 0 0 3px rgba(239,68,68,0.12)"
                              : undefined,
                          }}
                        />
                        {errors.location && (
                          <p id="location-error" className="mt-1.5 font-dmsans text-[12px] text-[#EF4444]" role="alert">
                            {errors.location}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          className="mb-2 block font-dmsans text-[13px] font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Project Type <span style={{ color: "var(--accent)", marginLeft: 2 }}>*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={(e) =>
                            handleChange("projectType", e.target.value)
                          }
                          aria-required="true"
                          aria-invalid={!!errors.projectType}
                          aria-describedby={errors.projectType ? "projectType-error" : undefined}
                          className="w-full rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: errors.projectType ? "#EF4444" : "var(--border-color)",
                            color: formData.projectType ? "var(--text-primary)" : "var(--text-muted)",
                            boxShadow: errors.projectType
                              ? "0 0 0 3px rgba(239,68,68,0.12)"
                              : undefined,
                          }}
                        >
                          <option value="">Select project type</option>
                          {PROJECT_TYPES.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p id="projectType-error" className="mt-1.5 font-dmsans text-[12px] text-[#EF4444]" role="alert">
                            {errors.projectType}
                          </p>
                        )}
                      </div>
                      <div>
                        <label
                          className="mb-2 block font-dmsans text-[13px] font-medium"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          Approximate Capacity
                        </label>
                        <input
                          id="capacity"
                          name="capacity"
                          type="text"
                          placeholder="e.g. 10 kW, 500 kW, 2 MW"
                          value={formData.capacity}
                          onChange={(e) =>
                            handleChange("capacity", e.target.value)
                          }
                          className="w-full rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                          style={{
                            background: "var(--bg-secondary)",
                            borderColor: "var(--border-color)",
                            color: "var(--text-primary)",
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="mb-2 block font-dmsans text-[13px] font-medium"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Message / Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Describe your project, timeline, or any specific requirements..."
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        className="min-h-[110px] w-full resize-y rounded-[10px] border px-4 py-3 font-dmsans text-[15px] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_rgba(var(--accent-rgb),0.12)]"
                        style={{
                          background: "var(--bg-secondary)",
                          borderColor: "var(--border-color)",
                          color: "var(--text-primary)",
                        }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex h-14 w-full items-center justify-center gap-2 rounded-xl font-rajdhani text-[16px] font-bold uppercase tracking-[0.1em] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: "var(--btn-primary-bg)",
                        color: "var(--btn-primary-text)",
                        boxShadow: "var(--shadow-button)",
                      }}
                      whileHover={!isSubmitting ? {
                        scale: 1.01,
                        background: "var(--gradient-accent-hover)",
                        boxShadow: "var(--shadow-button-hover)",
                        y: -1,
                      } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle size={20} />
                          Send via WhatsApp →
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
