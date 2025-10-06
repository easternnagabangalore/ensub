const sampleEvents = [
  {
    id: 1,
    title: 'Freshers Meet 2025',
    date: '2025-09-07',
    location: 'Bengaluru',
    desc: 'Welcoming new students with performances, introductions, and mentorship sign-ups.'
  },
  {
    id: 2,
    title: 'Cultural Night',
    date: '2025-11-15',
    location: 'Community Hall, Indiranagar',
    desc: 'An evening of music, dance, and cuisines that reflect our heritage.'
  },
  {
    id: 3,
    title: 'Career Workshop',
    date: '2026-01-20',
    location: 'MG Road',
    desc: 'Interactive sessions with alumni on resumes, interviews, and internships.'
  },
];

export default function Events() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-ensub-dark">Events</h2>
      <p className="mt-2 text-gray-600">Upcoming and past activities from the ENSUB community.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {sampleEvents.map(e => (
          <article key={e.id} className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold">{e.title}</h3>
            <p className="text-sm text-gray-500">{new Date(e.date).toDateString()} • {e.location}</p>
            <p className="text-gray-600 text-sm mt-2">{e.desc}</p>
            <button className="mt-3 inline-block text-sm font-semibold text-ensub-red hover:underline">Read more</button>
          </article>
        ))}
      </div>
    </main>
  );
}