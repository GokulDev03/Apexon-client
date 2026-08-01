// components/LeadList.tsx

import React from 'react';
import { Lead } from '../types/lead.types';
import LeadScoreCard from './LeadScoreCard';

interface LeadListProps {
  leads: Lead[];
  loading?: boolean;
  emptyMessage?: string;
}

export default function LeadList({
  leads,
  loading = false,
  emptyMessage = 'No leads found yet.',
}: LeadListProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-400 text-sm">
        Loading leads...
      </div>
    );
  }

  if (!leads || leads.length === 0) {
    return (
      <div className="flex items-center justify-center py-10 text-gray-500 text-sm">
        {emptyMessage}
      </div>
    );
  }

  // Sort: highest score first
  const sortedLeads = [...leads].sort((a, b) => b.score - a.score);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sortedLeads.map((lead) => (
        <LeadScoreCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}