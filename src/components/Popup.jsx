import { useEffect, useState } from "react";

export default function Popup({ onNavigate }) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupClosed = sessionStorage.getItem(
      "tiora-popup-closed"
    );

    if (!popupClosed) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);

    sessionStorage.setItem(
      "tiora-popup-closed",
      "true"
    );
  };

  // SHOP NOW → Men's page
  const goToMen = () => {
    closePopup();

    if (onNavigate) {
      onNavigate("/men");
    } else {
      window.history.pushState(null, "", "/men");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  // GO TO STORE → Discover page
  const goToDiscover = () => {
    closePopup();

    if (onNavigate) {
      onNavigate("/discover");
    } else {
      window.history.pushState(null, "", "/discover");
      window.dispatchEvent(new PopStateEvent("popstate"));
    }
  };

  if (!showPopup) return null;

  return (
    <div className="tiora-popup-overlay">

      <div className="tiora-popup">

        {/* Poster */}
        <img
          src="/products/men-pop.png"
          alt="TIORA Premium Shirts"
          className="tiora-popup-image"
        />

        {/* Close button */}
        <button
          className="tiora-popup-close"
          onClick={closePopup}
          aria-label="Close popup"
        >
          ×
        </button>

        {/* Buttons */}
        <div className="tiora-popup-actions">

          <button
            className="tiora-popup-shop"
            onClick={goToMen}
          >
            SHOP NOW
            <span>→</span>
          </button>

          <button
            className="tiora-popup-store"
            onClick={goToDiscover}
          >
            GO TO STORE
          </button>

        </div>

      </div>

    </div>
  );
}