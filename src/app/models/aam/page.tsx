'use client';
import React from 'react';
import { motion } from 'framer-motion';
import PhaseShiftContainer from '@/app/components/PhaseShiftContainer';

const comparisonData = [
  { model: 'AAM', alignment: 'Dynamic', context: 'Recursive', use: 'Symbolic Alignment', arch: 'Custom', notes: 'High precision, modular' },
  { model: 'LLM', alignment: 'Static', context: 'Sequential', use: 'Text Generation', arch: 'Transformer', notes: 'General language' },
  { model: 'LAM', alignment: 'Intent', context: 'Task', use: 'Intent Recognition', arch: 'Hybrid', notes: 'Action planning' },
  { model: 'MoE', alignment: 'Expert', context: 'Routed', use: 'Specialized Tasks', arch: 'Mixture', notes: 'Top-K selection' },
  { model: 'VLM', alignment: 'Multimodal', context: 'Image/Text', use: 'Vision-Language', arch: 'Multimodal', notes: 'Projection interface' },
  { model: 'SLM', alignment: 'Compact', context: 'Edge', use: 'Efficient Gen', arch: 'Optimized', notes: 'Edge deployment' },
  { model: 'MLM', alignment: 'Masked', context: 'Bidirectional', use: 'Token Prediction', arch: 'Transformer', notes: 'Feature representation' },
  { model: 'SAM', alignment: 'Prompt/Image', context: 'Segmentation', use: 'Segmentation', arch: 'Encoder/Decoder', notes: 'Feature correlation' },
];

export default function AAM() {
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
              Axiomatic Alignment Model (AAM)
            </motion.h1>
            <motion.p 
              className="text-lg font-mono max-w-3xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A novel system for achieving dynamic axiomatic alignment within recursive symbolic processing architectures through advanced mathematical frameworks. Designed for high-precision, modular symbolic alignment in complex systems.
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
                  <div>Alignment Accuracy: <span className="text-white font-bold">97.3%</span></div>
                  <div>Consistency Rate: <span className="text-white font-bold">96.8%</span></div>
                  <div>Processing Efficiency: <span className="text-white font-bold">94.5%</span></div>
                  <div>Symbolic Depth: <span className="text-white font-bold">12 layers</span></div>
                  <div>Alignment Latency: <span className="text-white font-bold">0.18ms</span></div>
                  <div>Evaluation Benchmarks: <span className="text-white font-bold">GLUE, SuperGLUE, Custom</span></div>
                  <div>Use-case Coverage: <span className="text-white font-bold">Decision Theory, System Alignment, Symbolic Reasoning</span></div>
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
                  <rect x="20" y="30" width="30" height="70" fill="#fff" fillOpacity="0.8" />
                  <rect x="70" y="40" width="30" height="60" fill="#fff" fillOpacity="0.6" />
                  <rect x="120" y="50" width="30" height="50" fill="#fff" fillOpacity="0.5" />
                  <rect x="170" y="60" width="30" height="40" fill="#fff" fillOpacity="0.4" />
                  <rect x="220" y="80" width="30" height="20" fill="#fff" fillOpacity="0.3" />
                  <text x="20" y="115" fontSize="10" fill="#bbb">Align</text>
                  <text x="70" y="115" fontSize="10" fill="#bbb">Consist</text>
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
                  The AAM leverages recursive symbolic processing and dynamic alignment verification to maintain high consistency and precision across system components. The architecture is modular, supporting rapid adaptation and integration with other symbolic and neural models.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                  <li>Recursive symbolic processing (12 layers)</li>
                  <li>Dynamic, context-aware alignment</li>
                  <li>Mathematical structure optimization</li>
                  <li>Consistency maintenance protocols</li>
                  <li>Supports hybrid symbolic-neural integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-mono font-bold mb-4">Applications</h3>
                <p className="text-sm text-gray-500 font-mono mb-4">
                  The AAM is used in advanced decision theory, symbolic reasoning, and system alignment tasks, excelling in environments requiring high interpretability and modularity.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 font-mono space-y-2">
                  <li>Complex system alignment</li>
                  <li>Advanced decision theory</li>
                  <li>Symbolic processing optimization</li>
                  <li>Mathematical structure verification</li>
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
                    <th className="p-2 text-left">Alignment</th>
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
                      <td className="p-2">{row.alignment}</td>
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