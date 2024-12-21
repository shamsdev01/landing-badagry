"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#ffefef] via-white to-[#efffef] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 top-0 w-96 h-96 bg-[#e41e26] rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-0 bottom-0 w-96 h-96 bg-[#0b4619] rounded-full filter blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center justify-center bg-[#e41e26] text-white w-20 h-20 rounded-full text-sm font-bold"
              >
                <div className="flex flex-col items-center">
                  <span className="text-lg">SSB</span>
                  <span className="text-base">2025</span>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a]"
              >
                The BRIDGE
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-xl md:text-2xl text-[#0b4619] font-semibold"
              >
                THE PATHWAY TO A GREATER BADAGRY
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">
                HON. SETONJI SUNDAY
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-[#0b4619]">
                BALOGUN
              </h3>
              <div className="bg-[#0b4619] text-white px-6 py-2 rounded-lg inline-block">
                EXECUTIVE CHAIRMAN
              </div>
              <p className="text-lg text-[#4a4a4a]">
                BADAGRY LOCAL GOVERNMENT
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:h-full flex justify-center items-center"
          >
            <div className="relative aspect-[3/4] w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/chairman.jpg"
                alt="Hon. Setonji Sunday Balogun"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 90vw, 40vw"
                priority
              />
            </div>
            
            {/* Decorative Elements - Adjusted for smaller image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-3 -right-3 w-20 h-20 md:w-28 md:h-28 bg-[#e41e26] rounded-full -z-10"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -top-3 -left-3 w-16 h-16 md:w-20 md:h-20 bg-[#0b4619] rounded-full -z-10"
            />
          </motion.div>
        </div>
      </div>

      
    </section>
  );
}
