'use client';

import { useEffect, useState } from 'react';
import LeadList from '@/components/lead-qualification/components/LeadList';
import { Lead } from '@/components/lead-qualification/types/lead.types';

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/leads/qualify')
      .then((res) => res.json())
      .then((data) => {
        setLeads(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-4">Leads Dashboard</h1>
      <LeadList leads={leads} loading={loading} />
    </div>
  );
}