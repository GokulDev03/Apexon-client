// components/LeadScoreCard.tsx

import React from 'react';
import { Lead } from '../types/lead.types';
import QualificationBadge from './QualificationBadge';

interface LeadScoreCardProps {
  lead: Lead;
}

export default function LeadScoreCard({ lead }: LeadScoreCardProps) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-md">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
        <QualificationBadge status={lead.status} />
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 mb-3">
        <p><span className="text-gray-500">Email:</span> {lead.email}</p>
        {lead.company && <p><span className="text-gray-500">Company:</span> {lead.company}</p>}
        {lead.budget && <p><span className="text-gray-500">Budget:</span> {lead.budget}</p>}
        {lead.timeline && <p><span className="text-gray-500">Timeline:</span> {lead.timeline}</p>}
      </div>

      {/* Score bar */}
      <div className="mb-2">
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Lead Score</span>
          <span>{lead.score}/100</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full ${
              lead.score >= 70 ? 'bg-green-500' : lead.score >= 40 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${lead.score}%` }}
          />
        </div>
      </div>

      {lead.reasoning && (
        <p className="text-xs text-gray-400 mt-2 italic">"{lead.reasoning}"</p>
      )}
    </div>
  );
}