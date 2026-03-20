import React from 'react';
import Link from 'next/link';

const menuItems = [
  {
    name: 'Dashboard',
    href: '/student',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'My Course',
    href: '/courses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path
          d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Zm3 4.7 6 3 6-3M6 13.2V17l6 3 6-3v-3.8"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: 'Assignment',
    href: '/assignments',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8h6M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Attendance',
    href: '/attendance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 3v4M16 3v4M7.5 11.5l2.2 2.2 4.8-4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: 'AI Planner',
    href: '/ai-planner',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M12 3 9.8 8.1 5 10.3l4.8 2.2L12 17.7l2.2-5.2 4.8-2.2-4.8-2.2L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M19 16.5 18 19l-2.5 1 2.5 1L19 23l1-2 2.5-1-2.5-1-1-2.5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Subscription',
    href: '/subscription',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
        <path d="M7 5h10a2 2 0 0 1 2 2v10l-3.5-1.7L12 17l-3.5-1.7L5 17V7a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col p-6 fixed left-0 top-0 z-40">
      <div className="flex items-center space-x-2 mb-10">
        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white font-bold">A</div>
        <span className="text-xl font-bold text-text-primary tracking-tight">AcaFlow</span>
      </div>

      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center space-x-3 px-4 py-3 rounded-xl text-text-secondary font-medium hover:bg-primary/5 hover:text-primary transition-all group"
          >
            <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-100">
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-4 rounded-2xl border border-primary/10 mb-6">
           <div className="text-sm font-bold text-primary mb-1 flex items-center">
             <span className="mr-2">✨</span> Pro Plan Active
           </div>
           <p className="text-xs text-text-secondary leading-relaxed">
             You have access to all AI features.
           </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white shadow-soft overflow-hidden">
             <div className="w-full h-full gradient-bg opacity-50"></div>
          </div>
          <div className="flex-grow min-w-0">
             <div className="text-sm font-bold text-text-primary truncate">Alex Rivera</div>
             <div className="text-xs text-text-secondary truncate">Student</div>
          </div>
        </div>
      </div>
    </div>
  );
}
