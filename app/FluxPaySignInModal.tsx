'use client';

import { useOnchainKit } from '@coinbase/onchainkit';
import styles from './fluxpay-sign-in-modal.module.css';
import { ConnectWalletButton } from 'wallet-connect-modal';
import 'wallet-connect-modal/dist/wallets/phantom/styles.css';
import 'wallet-connect-modal/dist/wallets/metamask/styles.css';
import 'wallet-connect-modal/dist/wallets/rabby/styles.css';
import 'wallet-connect-modal/dist/wallets/tronlink/styles.css';
import 'wallet-connect-modal/dist/wallets/bitget/styles.css';
import 'wallet-connect-modal/dist/wallets/coinbase/styles.css';
import 'wallet-connect-modal/dist/wallets/solflare/styles.css';

export function FluxPaySignInModal() {
  const { config } = useOnchainKit();
  const termsUrl = config?.wallet?.termsUrl;
  const privacyUrl = config?.wallet?.privacyUrl;
  return (
    <div
      className={styles.root}
      role="presentation"
    >
      <div
        className={`${styles.dialog} ${styles.dialogIntro}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="fluxpay-signin-heading"
      >
        <div className={styles.logoWrap} style={{ margin: '0 auto 0.75rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/flexpay_logo.png" alt="" className={styles.logoImg} />
        </div>
        <h2 id="fluxpay-signin-heading" className={styles.introTitle}>
          Sign in with your wallet
        </h2>
        <p className={styles.introBody}>
          Choose a wallet you already use in this browser to open the FlexPay dashboard. If
          several Ethereum wallets are installed, you may see more than one option—pick the one
          you want to use here.
        </p>
        <ConnectWalletButton userId="sousa" />
        <p className={styles.legal}>
          By connecting a wallet, you agree to our{' '}
          {termsUrl ? (
            <a href={termsUrl} target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          ) : (
            <>Terms of Service</>
          )}
          {privacyUrl ? (
            <>
              {' '}
              and{' '}
              <a href={privacyUrl} target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}
