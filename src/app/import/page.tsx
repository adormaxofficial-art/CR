'use client';
import { useState } from 'react';

export default function ImportPage() {
  const [csv, setCsv] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
    console.log(csv);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        className="w-full border p-2"
        rows={10}
        value={csv}
        onChange={e => setCsv(e.target.value)}
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-blue-500 text-white">
        Import
      </button>
    </form>
  );
}
