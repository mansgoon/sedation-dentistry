import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import './CouponCircle.css'; // Import the CSS file for the animation

export default function CouponCircle({ onClick, notificationCount }) {
    return (
        <div 
            className="fixed bottom-4 right-4 z-50 text-white p-4 rounded-full shadow-lg cursor-pointer flex items-center justify-center w-16 h-16 bg-[#5BA3BB] hover:bg-[#057BA2] transform coupon-bounce"
            onClick={onClick}
            aria-label="Reopen Coupon"
        >
            {notificationCount > 0 && (
                <div className="notification-badge">{notificationCount}</div>
            )}
            <FontAwesomeIcon icon={faGift} size="lg" />
        </div>
    );
}
