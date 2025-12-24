import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Service {
  title: string;
  description: string;
  points: string[];
}

interface ServiceDetailSliderProps {
  services: Service[];
}

const ServiceDetailSlider: React.FC<ServiceDetailSliderProps> = ({ services }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % services.length);
  const prev = () => setCurrent((c) => (c - 1 + services.length) % services.length);

  return (
    <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
      <div className="grid md:grid-cols-12 min-h-[460px]">

        {/* LEFT NAV */}
        <div className="md:col-span-4 px-8 py-10 border-r border-slate-200 bg-slate-50">
          <p className="text-xs uppercase tracking-wider text-slate-500 mb-8">
            Service Areas
          </p>

          <ul className="space-y-6">
            {services.map((service, index) => {
              const active = current === index;
              return (
                <li key={index}>
                  <button
                    onClick={() => setCurrent(index)}
                    className="group w-full text-left"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`text-sm font-medium ${
                          active ? "text-primary-600" : "text-slate-400"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1">
                        <p
                          className={`text-sm leading-snug transition-colors ${
                            active
                              ? "text-slate-900 font-semibold"
                              : "text-slate-600 group-hover:text-slate-900"
                          }`}
                        >
                          {service.title}
                        </p>

                        {active && (
                          <div className="mt-2 h-px w-10 bg-primary-600" />
                        )}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-8 px-10 py-12 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {/* Heading */}
              <div className="mb-6">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                  {String(current + 1).padStart(2, "0")}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 leading-tight">
                  {services[current].title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl mb-8">
                {services[current].description}
              </p>

              {/* Scope Points */}
              <ul className="space-y-4">
                {services[current].points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex gap-3 mt-10">
            <button
              onClick={prev}
              className="p-2.5 rounded-md border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="p-2.5 rounded-md border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 transition"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailSlider;
