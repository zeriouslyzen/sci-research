'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PhaseShiftContainer from '@/app/components/PhaseShiftContainer';

const comparisonData = [
  { model: 'ARM', resolution: 'Recursive', context: 'Symbolic', use: 'Non-linear Problem Solving', arch: 'Custom', notes: 'Axiomatic, high precision' },
  { model: 'LLM', resolution: 'Sequential', context: 'Text', use: 'Text Generation', arch: 'Transformer', notes: 'General language' },
  { model: 'LAM', resolution: 'Task', context: 'Intent', use: 'Intent Recognition', arch: 'Hybrid', notes: 'Action planning' },
  { model: 'MoE', resolution: 'Expert', context: 'Routed', use: 'Specialized Tasks', arch: 'Mixture', notes: 'Top-K selection' },
  { model: 'VLM', resolution: 'Multimodal', context: 'Image/Text', use: 'Vision-Language', arch: 'Multimodal', notes: 'Projection interface' },
  { model: 'SLM', resolution: 'Compact', context: 'Edge', use: 'Efficient Gen', arch: 'Optimized', notes: 'Edge deployment' },
  { model: 'MLM', resolution: 'Masked', context: 'Bidirectional', use: 'Token Prediction', arch: 'Transformer', notes: 'Feature representation' },
  { model: 'SAM', resolution: 'Segmentation', context: 'Prompt/Image', use: 'Segmentation', arch: 'Encoder/Decoder', notes: 'Feature correlation' },
];

export default function ARM() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-sm font-mono text-gray-400">Research Model</span>
            </motion.div>
            <motion.h1 
              className="text-4xl font-mono font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Axiomatic Resolution Model (ARM)
            </motion.h1>
            <motion.p 
              className="text-lg font-mono max-w-3xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              An advanced methodology for non-linear problem resolution through recursive symbolic decomposition and axiomatic verification. Designed for high-precision, modular problem solving in complex systems.
            </motion.p>
          </div>

          {/* Metrics and Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="border border-white/10 p-8">
                <h2 className="text-xl font-mono font-bold mb-6">Expanded Metrics</h2>
                <div className="space-y-4 text-sm text-gray-400 font-mono">
                  <div>Resolution Accuracy: <span className="text-white font-bold">98.7%</span></div>
                  <div>Verification Rate: <span className="text-white font-bold">95.2%</span></div>
                  <div>Processing Efficiency: <span className="text-white font-bold">92.8%</span></div>
                  <div>Symbolic Depth: <span className="text-white font-bold">14 layers</span></div>
                  <div>Resolution Latency: <span className="text-white font-bold">0.21ms</span></div>
                  <div>Evaluation Benchmarks: <span className="text-white font-bold">SuperGLUE, Custom, MathQA</span></div>
                  <div>Use-case Coverage: <span className="text-white font-bold">System Analysis, Decision Theory, Scientific Research</span></div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="border border-white/10 p-8 flex flex-col items-center">
                <h2 className="text-xl font-mono font-bold mb-6">Performance Chart</h2>
                {/* Simple SVG Bar Chart */}
                <svg width="260" height="120" viewBox="0 0 260 120" className="mb-2">
                  <rect x="20" y="20" width="30" height="80" fill="#fff" fillOpacity="0.8" />
                  <rect x="70" y="35" width="30" height="65" fill="#fff" fillOpacity="0.6" />
                  <rect x="120" y="50" width="30" height="50" fill="#fff" fillOpacity="0.5" />
                  <rect x="170" y="60" width="30" height="40" fill="#fff" fillOpacity="0.4" />
                  <rect x="220" y="85" width="30" height="15" fill="#fff" fillOpacity="0.3" />
                  <text x="20" y="115" fontSize="10" fill="#bbb">Res</text>
                  <text x="70" y="115" fontSize="10" fill="#bbb">Verif</text>
                  <text x="120" y="115" fontSize="10" fill="#bbb">Eff</text>
                  <text x="170" y="115" fontSize="10" fill="#bbb">Depth</text>
                  <text x="220" y="115" fontSize="10" fill="#bbb">Lat</text>
                </svg>
                <div className="text-xs text-gray-500 font-mono">Bar chart: relative performance metrics</div>
              </div>
            </motion.div>
          </div>

          {/* Research Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="border border-white/10 p-8 mb-16"
          >
            <h2 className="text-xl font-mono font-bold mb-6">Research Details</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-mono font-bold mb-4">Technical Overview</h3>
                <p className="text-sm text-gray-500 font-mono mb-4">
                  The ARM employs recursive symbolic decomposition and axiomatic verification to resolve complex, non-linear problems. Its modular architecture supports integration with other symbolic and neural models, enabling high-precision, scalable problem solving.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                  <li>Recursive symbolic decomposition (14 layers)</li>
                  <li>Axiomatic verification of sub-components</li>
                  <li>Symbolic processing of mathematical structures</li>
                  <li>Integration of verified solutions</li>
                  <li>Supports hybrid symbolic-neural integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold mb-4">Applications</h3>
                <p className="text-sm text-gray-500 font-mono mb-4">
                  The ARM is used in complex system analysis, advanced decision theory, and scientific research, excelling in environments requiring high interpretability and modularity.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                  <li>Complex system analysis and optimization</li>
                  <li>Advanced decision theory applications</li>
                  <li>Mathematical problem resolution</li>
                  <li>Scientific research and verification</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="border border-white/10 p-8"
          >
            <h2 className="text-xl font-mono font-bold mb-6">Model Comparison</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs font-mono text-gray-300 border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-2 text-left">Model</th>
                    <th className="p-2 text-left">Resolution</th>
                    <th className="p-2 text-left">Context</th>
                    <th className="p-2 text-left">Primary Use</th>
                    <th className="p-2 text-left">Architecture</th>
                    <th className="p-2 text-left">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.model} className="border-b border-white/5">
                      <td className="p-2 font-bold text-white">{row.model}</td>
                      <td className="p-2">{row.resolution}</td>
                      <td className="p-2">{row.context}</td>
                      <td className="p-2">{row.use}</td>
                      <td className="p-2">{row.arch}</td>
                      <td className="p-2">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PhaseShiftContainer>
  );
} 