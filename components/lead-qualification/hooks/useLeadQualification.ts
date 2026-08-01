// hooks/useLeadQualification.ts

import { useState } from 'react';
import { qualifyLead } from '../services/leadQualificationService';
import { Lead } from '../types/lead.types';

export function useLeadQualification() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lead, setLead] = useState<Lead | null>(null);

  const runQualification = async (chatData: any) => {
    setLoading(true);
    setError(null);
    try {
      const result = await qualifyLead(chatData);
      setLead(result);
      return result;
    } catch (err) {
      setError('Lead qualification failed');
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { runQualification, lead, loading, error };
}