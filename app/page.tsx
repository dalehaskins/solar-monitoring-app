"use client";


import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Site {
  siteid: number;
  sitename: string;
}

export default function HomePage() {
  const [sites, setSites] = useState<Site[]>([]);

  useEffect(() => {
    async function fetchSites() {
      const res = await fetch('/api/sites');
      const data: Site[] = await res.json();
      setSites(data);
    }

    fetchSites();
  }, []);

  return (
    <div>
      <h1>Site List</h1>
      <ul>
        {sites.map((site) => (
          <li key={site.siteid}>
            {site.siteid} - {site.sitename}
          </li>
        ))}
      </ul>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  );
}
