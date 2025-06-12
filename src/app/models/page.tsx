'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import PhaseShiftContainer from '@/app/components/PhaseShiftContainer';

export default function ModelsPage() {
  return (
    <PhaseShiftContainer>
      <div className="min-h-screen bg-black text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <div className="mb-16">
            <motion.h1 
              className="text-4xl font-mono font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Research Models
            </motion.h1>
            <motion.p 
              className="text-lg font-mono max-w-3xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Advanced frameworks for achieving dynamic axiomatic alignment and non-linear problem resolution within recursive symbolic processing architectures.
            </motion.p>
          </div>

          {/* Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link href="/models/aam" className="block">
                <div className="border border-white/10 p-8 hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-2xl font-mono font-bold">AAM</h2>
                    <span className="text-sm font-mono text-gray-400">01</span>
                  </div>
                  <p className="text-gray-400 font-mono mb-6">
                    Axiomatic Alignment Model
                  </p>
                  <p className="text-sm text-gray-500 font-mono mb-8">
                    A novel system for achieving dynamic axiomatic alignment within recursive symbolic processing architectures.
                  </p>
                  <div className="flex items-center text-sm font-mono text-gray-400">
                    <span>View Research</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link href="/models/arm" className="block">
                <div className="border border-white/10 p-8 hover:border-white/20 transition-colors duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h2 className="text-2xl font-mono font-bold">ARM</h2>
                    <span className="text-sm font-mono text-gray-400">02</span>
                  </div>
                  <p className="text-gray-400 font-mono mb-6">
                    Axiomatic Resolution Model
                  </p>
                  <p className="text-sm text-gray-500 font-mono mb-8">
                    An advanced methodology for non-linear problem resolution through recursive symbolic decomposition.
                  </p>
                  <div className="flex items-center text-sm font-mono text-gray-400">
                    <span>View Research</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PhaseShiftContainer>
  );
} 