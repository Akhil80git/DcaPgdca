import React, { useState, useEffect, useRef } from 'react';
import { REAL_ADS } from '../../data/adsData';
import { InterstitialAdModal } from './InterstitialAdModal';
import { TopStickyAd } from './TopStickyAd';
import { BottomFloatingAd } from './BottomFloatingAd';
import { SideSkyscraperAds } from './SideSkyscraperAds';
import { SurpriseFloatingAd } from './SurpriseFloatingAd';

export const AdManager: React.FC = () => {
  // State for ad visibility
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [showTopAd, setShowTopAd] = useState(false);
  const [showBottomAd, setShowBottomAd] = useState(false);
  const [showLeftSkyscraper, setShowLeftSkyscraper] = useState(true);
  const [showRightSkyscraper, setShowRightSkyscraper] = useState(true);

  // Indexes of ads currently displayed in each slot
  const [interstitialAdIndex, setInterstitialAdIndex] = useState(0);
  const [topAdIndex, setTopAdIndex] = useState(1);
  const [bottomAdIndex, setBottomAdIndex] = useState(2);
  const [leftAdIndex, setLeftAdIndex] = useState(3);
  const [rightAdIndex, setRightAdIndex] = useState(4);

  // User manual dismiss flags so we don't immediately pop back if dismissed in that session
  const userDismissedTopRef = useRef(false);
  const userDismissedBottomRef = useRef(false);

  // 1. Initial Popup on site open ("site koi open kare tab dikhao cross se hta jaye")
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInterstitial(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // 2. Scroll detection for Top Sticky Ad ("user site mai kuchh scrool kar rh ahai kuchh der bad topmai chhota sa ad chalu kar do cross")
  useEffect(() => {
    let triggered = false;

    const handleScroll = () => {
      if (triggered || userDismissedTopRef.current) return;
      if (window.scrollY > 150) {
        triggered = true;
        setShowTopAd(true);
      }
    };

    // Also a fallback timer (after 8 seconds of visiting)
    const fallbackTimer = setTimeout(() => {
      if (!userDismissedTopRef.current) {
        setShowTopAd(true);
      }
    }, 8000);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fallbackTimer);
    };
  }, []);

  // 3. Bottom floating ad appears after 15 seconds ("kabhi bottom mai")
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!userDismissedBottomRef.current) {
        setShowBottomAd(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // 4. Periodic rotation ("kuch kuchh der mai ads dikhana hai ok")
  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate top ad
      if (!userDismissedTopRef.current) {
        setTopAdIndex((prev) => (prev + 1) % REAL_ADS.length);
      }

      // Rotate bottom ad
      if (!userDismissedBottomRef.current) {
        setBottomAdIndex((prev) => (prev + 2) % REAL_ADS.length);
        // Occasionally re-enable bottom ad if it was dismissed long ago
        setShowBottomAd(true);
      }

      // Rotate side skyscrapers
      setLeftAdIndex((prev) => (prev + 1) % REAL_ADS.length);
      setRightAdIndex((prev) => (prev + 3) % REAL_ADS.length);

      // Periodically alternate or refresh left/right
      setShowLeftSkyscraper(true);
      setShowRightSkyscraper(true);
    }, 28000); // Rotate every 28 seconds

    return () => clearInterval(interval);
  }, []);

  // Handlers for closing each ad
  const handleCloseInterstitial = () => {
    setShowInterstitial(false);
  };

  const handleCloseTop = () => {
    setShowTopAd(false);
    userDismissedTopRef.current = true;
    // Allow it to reappear with another fresh ad after 60 seconds
    setTimeout(() => {
      userDismissedTopRef.current = false;
      setTopAdIndex((prev) => (prev + 1) % REAL_ADS.length);
      setShowTopAd(true);
    }, 60000);
  };

  const handleCloseBottom = () => {
    setShowBottomAd(false);
    userDismissedBottomRef.current = true;
    // Allow it to reappear with another ad after 45 seconds
    setTimeout(() => {
      userDismissedBottomRef.current = false;
      setBottomAdIndex((prev) => (prev + 1) % REAL_ADS.length);
      setShowBottomAd(true);
    }, 45000);
  };

  const handleCloseLeft = () => {
    setShowLeftSkyscraper(false);
    // Reappear after 40 seconds with fresh creative
    setTimeout(() => {
      setLeftAdIndex((prev) => (prev + 1) % REAL_ADS.length);
      setShowLeftSkyscraper(true);
    }, 40000);
  };

  const handleCloseRight = () => {
    setShowRightSkyscraper(false);
    // Reappear after 40 seconds with fresh creative
    setTimeout(() => {
      setRightAdIndex((prev) => (prev + 1) % REAL_ADS.length);
      setShowRightSkyscraper(true);
    }, 40000);
  };

  return (
    <>
      {/* 1. Modal Interstitial Ad on initial open */}
      <InterstitialAdModal
        ad={REAL_ADS[interstitialAdIndex]}
        isOpen={showInterstitial}
        onClose={handleCloseInterstitial}
      />

      {/* 2. Top Sticky Banner Ad */}
      <TopStickyAd
        ad={REAL_ADS[topAdIndex]}
        isOpen={showTopAd}
        onClose={handleCloseTop}
      />

      {/* 3. Bottom Floating Banner Ad */}
      <BottomFloatingAd
        ad={REAL_ADS[bottomAdIndex]}
        isOpen={showBottomAd}
        onClose={handleCloseBottom}
      />

      {/* 4. Left & Right Vertical Skyscraper Ads */}
      <SideSkyscraperAds
        leftAd={REAL_ADS[leftAdIndex]}
        rightAd={REAL_ADS[rightAdIndex]}
        showLeft={showLeftSkyscraper}
        showRight={showRightSkyscraper}
        onCloseLeft={handleCloseLeft}
        onCloseRight={handleCloseRight}
      />

      {/* 5. Unpredictable Random Surprise Floating Ad (Appears in random corners/sides at random intervals) */}
      <SurpriseFloatingAd />
    </>
  );
};
