"use client";

import { motion } from "framer-motion";

const themes = [
  {
    number: "1",
    title: "SUSTAINABLE HUMAN CAPITAL DEVELOPMENT",
    color: "bg-[#8b1f94]",
    items: [
      "Education",
      "Vocational Training & Skill Acquisition",
      "Technology And Innovation",
      "Job Creation And Economy Growth",
      "Youth And Sport Development",
      "Tourism And Heritage",
    ],
  },
  {
    number: "2",
    title: "SERVICE TO HUMANITY AND SOCIAL DEVELOPMENT",
    color: "bg-[#e91e63]",
    items: [
      "Health Care",
      "Security",
      "Community Engagement & Traditional Rulers Participation",
      "Empowerment and Social Welfare",
      "Local Government Staff Welfare",
      "Fiscal Responsibility",
    ],
  },
  {
    number: "3",
    title: "BUILDING SUSTAINABLE INFRASTRUCTURE",
    color: "bg-[#ff5722]",
    items: [
      "Infrastructural & Urban Development & Housing",
      "Environment",
    ],
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      {/* Left Section with Developmental Themes */}
      <div className="absolute left-0 top-0 h-full 
        w-full md:w-[55%] lg:w-[45%] 
        overflow-hidden
        md:overflow-visible"
      >
        {/* Pink Triangle Background */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-[#e91e63] clip-triangle-mobile md:clip-triangle"
        />

        {/* Developmental Themes Container */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative z-10 h-[30vh] md:h-full flex flex-col items-center justify-center"
        >
          <div className="text-center -mt-0 md:-mt-20">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-wider"
            >
              DEVELOPMENTAL
            </motion.h2>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white tracking-wider mt-2"
            >
              THEMES
            </motion.h2>
          </div>

          {/* SSB Circle */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute 
              top-[85%] md:top-[65%] 
              left-1/2 
              -translate-x-1/2 
              -translate-y-1/2
              w-20 sm:w-24 md:w-32 lg:w-40 
              h-20 sm:h-24 md:h-32 lg:h-40 
              bg-white rounded-full shadow-2xl 
              flex items-center justify-center 
              hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <div className="text-[#e91e63] text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold tracking-wider">
                SSB
              </div>
              <div className="text-[#e91e63] text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold">
                2025
              </div>
            </div>
          </motion.div>

          {/* Decorative Circles - Adjusted for mobile */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute left-[35%] top-[15%] w-4 md:w-6 h-4 md:h-6 bg-[#ffd700] rounded-full opacity-50"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="absolute left-[25%] top-[45%] w-3 md:w-4 h-3 md:h-4 bg-[#ffd700] rounded-full opacity-50"
          />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9 }}
            className="absolute left-[15%] top-[30%] w-2 md:w-3 h-2 md:h-3 bg-[#ffd700] rounded-full opacity-50"
          />
        </motion.div>
      </div>

      {/* Content Container - Right Section */}
      <div className="relative 
        ml-0 md:ml-auto 
        w-full md:w-[65%] lg:w-[60%] 
        min-h-screen 
        pt-[35vh] md:pt-20 
        px-4 sm:px-6 md:px-8"
      >
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.number}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative hover:translate-x-2 transition-transform"
            >
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-6">
                {/* Number Box */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.3 + 0.4 }}
                  className={`${theme.color} 
                    w-12 h-12 sm:w-16 md:w-20 
                    sm:h-16 md:h-20 
                    flex items-center justify-center 
                    rounded-lg shadow-lg 
                    hover:shadow-xl transition-shadow`}
                >
                  <span className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    {theme.number}
                  </span>
                </motion.div>

                <div className="flex-1 space-y-3 md:space-y-4">
                  {/* Title Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.3 + 0.2 }}
                    className={`${theme.color} 
                      py-2 md:py-3 
                      px-3 sm:px-4 md:px-6 
                      rounded-lg origin-left 
                      hover:shadow-lg transition-shadow`}
                  >
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">
                      {theme.title}
                    </h3>
                  </motion.div>

                  {/* List Items */}
                  <motion.ul className="space-y-2 md:space-y-3 pl-2 md:pl-4">
                    {theme.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.3 + itemIndex * 0.1 + 0.5,
                        }}
                        className="flex items-center gap-2 md:gap-3 
                          text-gray-700 hover:text-gray-900 
                          transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full 
                          group-hover:bg-[#e91e63] transition-colors" 
                        />
                        <span className="text-xs sm:text-sm md:text-base">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SSB 6 Logo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 md:bottom-6 right-4 md:right-6 
          flex items-center gap-2 
          hover:scale-105 transition-transform"
      >
        <span className="text-[#8b1f94] font-bold text-base sm:text-lg md:text-xl">
          SSB
        </span>
        <div className="w-5 h-5 sm:w-6 md:w-8 
          sm:h-6 md:h-8 
          bg-[#8b1f94] rounded-full 
          flex items-center justify-center 
          text-white font-bold 
          text-xs sm:text-sm md:text-base"
        >
          6
        </div>
      </motion.div>
    </section>
  );
}
