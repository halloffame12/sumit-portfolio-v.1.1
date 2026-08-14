import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Copy } from 'lucide-react';
import { PROFILE } from '../data/profile';

const CopyEmail: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      const el = document.createElement('textarea');
      el.value = PROFILE.email;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={copy}
      data-cursor="copy"
      aria-live="polite"
      whileTap={{ translate: 3, translateY: 3 }}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
        width: '100%', padding: '0.875rem 1rem',
        background: copied ? 'var(--black)' : 'var(--bg-card)',
        border: 'var(--bw) solid var(--border)',
        boxShadow: copied ? '3px 3px 0px var(--border)' : 'var(--sh-sm)',
        cursor: 'pointer', fontFamily: 'inherit', color: copied ? 'var(--bg)' : 'var(--black)',
        transition: 'background 0.15s, color 0.15s',
      }}
      aria-label={copied ? 'Email copied' : `Copy email ${PROFILE.email}`}
    >
      <span className="min-w-0">
        <span className="block font-mono" style={{ fontSize: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: copied ? 'var(--bg)' : 'var(--ink-faint)', fontWeight: 700 }}>
          Email
        </span>
        <span className="block truncate" style={{ fontWeight: 800, fontSize: '0.75rem' }}>{PROFILE.email}</span>
      </span>
      <motion.span
        key={copied ? 'copied' : 'copy'}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        className="flex items-center gap-1 flex-shrink-0"
        style={{ fontSize: '0.625rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em' }}
      >
        {copied ? (<><CheckCircle size={14} /> Copied ✓</>) : (<><Copy size={14} /> Copy</>)}
      </motion.span>
    </motion.button>
  );
};

export default CopyEmail;