'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Mission = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.9, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <motion.section 
      ref={componentRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      style={{ opacity, scale }}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Header */}
      <motion.div 
        variants={fadeInUp}
        className="bg-purple-700 text-white p-4 sm:p-6 rounded-lg mb-8"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center gap-3">
          THE BRIDGE
        </h2>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y }}
        className="space-y-6"
      >
        <motion.p 
          variants={fadeInUp}
          className="text-lg leading-relaxed"
        >
          The 1979 Constitution of the Federal Republic of Nigeria accepted Local Government as the third tier of government. As is already known,
        </motion.p>

        <motion.p 
          variants={fadeInUp}
          className="text-lg leading-relaxed"
        >
          Local Government is a public sector organisation with assigned functions and responsibilities, administrative structure and financial arrangement for maintaining itself and rendering its statutory assigned obligations to its citizens.
        </motion.p>

        <motion.p 
          variants={fadeInUp}
          className="text-lg leading-relaxed"
        >
          This tier of Government constitutes the level of Governance closest to the grassroots people who live in different households, Zones and Wards, and have the responsibility or duty of providing effective and good governance that will bring development and dividends to the communities and the people therein.
        </motion.p>

        <motion.p 
          variants={fadeInUp}
          className="text-lg leading-relaxed"
        >
          However, to put all these into effective practice that would take our dear Local Government (Badagry) to a greater height and progressive development, an experienced and visionary leader must be put forward to lead.
        </motion.p>

        <motion.p 
          variants={fadeInUp}
          className="text-lg leading-relaxed"
        >
          For this task to be accomplished I, Hon. Setonji Sunday Balogun (SSB) with broad experience in sustainable governance encompassing civil service, local government administration, grassroots political alignment, and sociopolitical engagement, have put myself forward to serve.
        </motion.p>

        <motion.p 
          variants={fadeInUp}
          className="text-xl font-semibold text-green-800 mt-8"
        >
          Given this, I seek your support and endorsement to assume this responsibility towards a greater BADAGRY.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Mission;
