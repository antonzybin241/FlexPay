'use client';

import { FluxPaySignInModal } from './FluxPaySignInModal';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <div className={styles.connectOnlyRoot}>
      <FluxPaySignInModal />
    </div>
  );
}
