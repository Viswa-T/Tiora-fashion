import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // Show only if popup hasn't already been closed
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

    // Remember that popup was closed
    sessionStorage.setItem(
      "tiora-popup-closed",
      "true"
    );
  };

  // SHOP NOW → Men's page
  const goToMen = () => {
    closePopup();
    navigate("/men");
  };

  // GO TO STORE → Discover page
  const goToDiscover = () => {
    closePopup();
    navigate("/discover");
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