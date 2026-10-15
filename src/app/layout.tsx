import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LearnPilot — AI-powered learning',
  description: 'Learn smarter with a personal AI tutor.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
