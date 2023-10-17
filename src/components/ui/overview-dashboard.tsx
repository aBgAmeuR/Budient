'use client'

import React from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

type DataChart = {
  name: string;
  total: number;
}

export const OverviewDashboard = ({ dataChart }: { dataChart: DataChart[] }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={dataChart}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#2ec4b6" radius={[4, 4, 0, 0]} />
        <Tooltip
          cursor={{ fill: 'transparent' }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
