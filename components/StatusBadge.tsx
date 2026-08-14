import React from 'react';
import type { ProjectStatus } from '../types';

const STATUS_META: Record<ProjectStatus, { label: string; className: string; dot?: boolean }> = {
  active: { label: 'ACTIVE', className: 'brutal-badge-primary', dot: true },
  maintained: { label: 'MAINTAINED', className: 'brutal-badge-yellow' },
  stable: { label: 'STABLE', className: 'brutal-badge' },
  archived: { label: 'ARCHIVED', className: 'brutal-badge-dark' },
};

const StatusBadge: React.FC<{ status?: ProjectStatus; size?: string }> = ({ status = 'stable', size = '0.5rem' }) => {
  const meta = STATUS_META[status];
  return (
    <span className={`brutal-badge ${meta.className}`} style={{ fontSize: size }}>
      {meta.dot && (
        <span className="animate-pulse-dot" style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--bg)', display: 'inline-block' }} />
      )}
      {meta.label}
    </span>
  );
};

export default StatusBadge;
