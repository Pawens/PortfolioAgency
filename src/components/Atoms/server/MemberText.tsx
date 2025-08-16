import React from 'react';

interface MemberTextProps {
  children: React.ReactNode;
}

function MemberText({ children }: MemberTextProps) {
  return (
    <p className="text-[14px] text-center" style={{ color: 'var(--color-secondary)' }}>{children}</p>
  );
}

export default MemberText;
