// components/QualificationBadge.tsx

import React from 'react';

interface QualificationBadgeProps {
  status: 'qualified' | 'in-review' | 'disqualified' | 'new';
}

const STATUS_CONFIG = {
  qualified: {
    label: 'Qualified',
    className: 'bg-green-500/10 text-green-400 border-green-500/30',
  },
  'in-review': {
    label: 'In Review',
    className: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  },
  disqualified: {
    label: 'Disqualified',
    className: 'bg-red-500/10 text-red-400 border-red-500/30',
  },
  new: {
    label: 'New',
    className: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  },
};

export default function QualificationBadge({ status }: QualificationBadgeProps) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.new;

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-xs font-medium border ${config.className}`}
    >
      {config.label}
    </span>
  );
}