import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const ChartWidget = ({ widget }) => {
  if (widget.type === 'PieChart') {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={widget.data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {widget.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  if (widget.type === 'BarChart') {
    return (
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={widget.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value">
            {widget.data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  }

  return (
    <div>
      <h3 className="widget-name">{widget.name}</h3>
      <p className="widget-content">{widget.content}</p>
    </div>
  );
};

export default ChartWidget;