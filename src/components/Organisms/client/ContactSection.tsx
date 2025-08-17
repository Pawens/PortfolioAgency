"use client";

import React, { useState, useEffect } from "react";
import FormField from "@/components/Molecules/FormField";
import ButtonDefault from "@/components/Atoms/server/ButtonDefault";
import emailjs from "@emailjs/browser";
import PawensLogo from "@/assets/icons/PawensLogo.svg";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedback, setFeedback] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setOffset(scroll * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_ADAM!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ADAM!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID_ADAM!
      );

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_ROMAIN!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_ROMAIN!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID_ROMAIN!
      );

      setFeedback("Message envoyé avec succès 🎉");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFeedback(null), 3000);
    } catch (error) {
      console.error("Erreur EmailJS ❌", error);
      setFeedback("Une erreur s'est produite, réessayez.");
      setTimeout(() => setFeedback(null), 3000);
    }
  };

  return (
    <section className="bg-[var(--color-primary)] py-16 px-4 text-center relative overflow-hidden">
      <div
        className="absolute top-[-150px] left-[-250px] w-[600px] opacity-10 z-[10] pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translateX(${offset}px)` }}
      >
        <PawensLogo className="block w-full h-auto fill-[var(--color-secondary)]" />
      </div>

      <h2 className="text-[var(--color-secondary)] text-[32px] italic mb-10">
        Contactez-nous !
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mt-[30px] mx-auto flex flex-col gap-[10px] pl-[25%] pr-[25%]"
      >
        <FormField
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nom"
        />
        <FormField
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <FormField
          name="message"
          type="textarea"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
        />

        <div className="mt-6">
          <ButtonDefault className="mt-[10px] px-[100px]" type="submit">
            ENVOYER
          </ButtonDefault>
        </div>
      </form>

      {/* Feedback */}
      {feedback && (
        <div className="fixed top-[50px] left-1/2 -translate-x-1/2 bg-[var(--color-primary)] text-[var(--color-secondary)] w-[300px] h-[180px] flex items-center justify-center text-xl text-center rounded-2xl shadow-2xl z-50 animate-popupFade">
          {feedback}
        </div>
      )}
    </section>
  );
};

export default ContactSection;
