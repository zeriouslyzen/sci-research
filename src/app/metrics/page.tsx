'use client';
import React from 'react';
import {
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, RadialBarChart, RadialBar, Legend, Cell
} from 'recharts';
import { motion } from 'framer-motion';

const recursiveDepthData = [
  { name: '00:00', value: 12 },
  { name: '00:05', value: 18 },
  { name: '00:10', value: 24 },
  { name: '00:15', value: 20 },
  { name: '00:20', value: 28 },
  { name: '00:25', value: 32 },
  { name: '00:30', value: 30 },
];
const collapseEventData = [
  { name: 'Safe', value: 400 },
  { name: 'Warning', value: 120 },
  { name: 'Critical', value: 40 },
];
const coherenceData = [
  { name: 'Coherence', value: 92 },
  { name: 'Decoherence', value: 8 },
];

export default function MetricsPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 section-title">Live Operational Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="widget lg:col-span-4">
            <h3 className="font-plex text-lg text-gray-300 mb-4">Recursive Depth Analysis (Live)</h3>
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="h-64 bg-gray-900/60 rounded flex items-center justify-center">
              <ResponsiveContainer width="100%" height="90%">
                <AreaChart data={recursiveDepthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorNeon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0ff" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#f0f" stopOpacity={0.3} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="name" stroke="#fff" fontSize={12} />
                  <YAxis stroke="#fff" fontSize={12} />
                  <Tooltip contentStyle={{ background: '#18181b', border: 'none', color: '#fff' }} />
                  <Area type="monotone" dataKey="value" stroke="#0ff" fill="url(#colorNeon)" strokeWidth={3} dot={{ r: 4, fill: '#fff' }} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          <div className="widget lg:col-span-2">
            <h3 className="font-plex text-lg text-gray-300 mb-4">Collapse Event Distribution</h3>
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="h-80 bg-gray-900/60 rounded flex items-center justify-center">
              <ResponsiveContainer width="100%" height="90%">
                <BarChart data={collapseEventData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#222" />
                  <XAxis dataKey="name" stroke="#fff" fontSize={12} />
                  <YAxis stroke="#fff" fontSize={12} />
                  <Tooltip contentStyle={{ background: '#18181b', border: 'none', color: '#fff' }} />
                  <Bar dataKey="value">
                    <Cell fill="#0ff" />
                    <Cell fill="#f0f" />
                    <Cell fill="#ffe600" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          <div className="widget">
            <h3 className="font-plex text-lg text-gray-300 mb-4">System Coherence</h3>
            <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="h-80 flex items-center justify-center bg-gray-900/60 rounded">
              <ResponsiveContainer width="100%" height="90%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="100%" barSize={18} data={coherenceData} startAngle={90} endAngle={-270}>
                  <RadialBar background dataKey="value" cornerRadius={10} >
                    <Cell key="coh" fill="#0ff" />
                    <Cell key="decoh" fill="#f0f" />
                  </RadialBar>
                  <Legend iconSize={10} layout="vertical" verticalAlign="middle" align="right" wrapperStyle={{ color: '#fff', fontSize: 14 }} />
                </RadialBarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          <div className="widget flex flex-col justify-between">
            <div>
              <h3 className="font-plex text-lg text-gray-300 mb-2">System Status</h3>
              <p className="text-4xl font-bold text-green-400">NOMINAL</p>
            </div>
            <div>
              <h3 className="font-plex text-lg text-gray-300 mb-2 mt-6">Active Inquiries</h3>
              <p className="text-4xl font-bold text-teal-400">7</p>
            </div>
          </div>
          <div className="widget lg:col-span-2">
            <h3 className="font-plex text-lg text-gray-300 mb-4">API ARC Throughput</h3>
            <div className="flex justify-around items-center h-full text-center">
              <div>
                <p className="text-sm text-gray-400">Ingress (q/s)</p>
                <p className="text-4xl font-bold text-cyan-400">1,829</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Egress (c/s)</p>
                <p className="text-4xl font-bold text-fuchsia-400">1,828</p>
              </div>
            </div>
          </div>
          <div className="widget lg:col-span-2">
            <h3 className="font-plex text-lg text-gray-300 mb-4">Computational Epoch</h3>
            <div className="h-full flex items-center justify-center bg-gray-900/60 rounded">
              <p className="text-6xl font-bold text-gray-400 font-plex tracking-widest">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 