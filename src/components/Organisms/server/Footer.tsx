import React from 'react';
import BackToTopButton from '@/components/Atoms/client/BackToTopButton';
import MemberText from '@/components/Atoms/server/MemberText';

function Footer() {
  return (
    <footer className="w-full px-[32px] py-[24px] flex flex-col items-center gap-[48px]" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="w-full flex justify-end mb-[24px]">
        <BackToTopButton />
      </div>

      {/* Divider + Texts */}
      <div className="w-full border-t border-[var(--color-secondary)] pt-[24px] flex justify-between items-center">
        <MemberText>Copyright. Pawens @2025</MemberText>
        <MemberText>Romain Parisot & Adam Simon</MemberText>
      </div>

    </footer>
  );
}

export default Footer;
