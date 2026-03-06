"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const vatGapData = [
  { year: "2011", complianceGap: 12.4, policyGap: 48.2 },
  { year: "2012", complianceGap: 11.8, policyGap: 47.9 },
  { year: "2013", complianceGap: 11.5, policyGap: 48.1 },
  { year: "2014", complianceGap: 10.9, policyGap: 47.5 },
  { year: "2015", complianceGap: 10.2, policyGap: 47.2 },
  { year: "2016", complianceGap: 9.8, policyGap: 46.8 },
  { year: "2017", complianceGap: 9.5, policyGap: 46.5 },
  { year: "2018", complianceGap: 9.1, policyGap: 46.2 },
  { year: "2019", complianceGap: 8.7, policyGap: 45.9 },
  { year: "2020", complianceGap: 8.2, policyGap: 45.5 },
  { year: "2021", complianceGap: 7.9, policyGap: 45.1 },
];

export default function VatGapPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900">VAT Gap (2011 - 2021)</h1>
        <p className="mt-2 text-gray-600">
          Analyse de l'écart de TVA, réparti en déficit de conformité (Compliance Gap) et déficit politique (Policy Gap).
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-12">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Évolution de l'écart de TVA (en % des recettes théoriques)</h2>
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={vatGapData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorCompliance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorPolicy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="year" className="tabular-nums text-sm" />
              <YAxis className="tabular-nums text-sm" unit="%" />
              <Tooltip 
                contentStyle={{ borderRadius: '0.5rem', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="policyGap"
                name="Policy Gap"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorPolicy)"
              />
              <Area
                type="monotone"
                dataKey="complianceGap"
                name="Compliance Gap"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorCompliance)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Données détaillées</h3>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Année</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Compliance Gap (%)</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Gap (%)</th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Gap (%)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {vatGapData.map((row) => (
                <tr key={row.year} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 tabular-nums">{row.year}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right tabular-nums">{row.complianceGap.toFixed(1)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right tabular-nums">{row.policyGap.toFixed(1)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900 text-right tabular-nums">
                    {(row.complianceGap + row.policyGap).toFixed(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
