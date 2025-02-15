import React from 'react';

const PromoCard = ({ iconSrc, title, description }) => (
  <div className="flex items-center space-x-3">
    <div className="w-12 h-12 flex-shrink-0">
      <img src={iconSrc} alt={title} className="w-full h-full object-contain" />
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  </div>
);

const PromoCardsSection = () => {
  return (
    <div className="bg-gray-50 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* First Promo Card */}
          <PromoCard
            iconSrc="https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/camera.svg"
            title="The BD's No. 1 bestselling brand"
            description="of friendly bacteria supplements^"
          />

          {/* Trustpilot Card */}
          <PromoCard
            iconSrc="https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/truck.svg"
            title="Rated 'Excellent' on User Reviews"
            description="4.8 stars (based on Reviews)"
          />

          {/* Gut Health Card */}
          <PromoCard
            iconSrc="https://d27c6j8064skg9.cloudfront.net/Ode+a+la+Rose/05/truck.svg"
            title="Scientifically proven to reach "
            description="& complement the natural microbiome"
          />

          {/* Delivery Card */}
          <PromoCard
            iconSrc="https://i.ibb.co/hFR4t2S5/535239.png"
            title="All over the country Bangladesh"
            description="and 14-day hassle-free returns"
          />
        </div>

        {/* Mobile Region Selector */}
        <button className="md:hidden flex items-center space-x-1 mt-4 ml-auto text-gray-600 hover:text-gray-900">
          <svg className="w-5 h-5" fill="currentColor">
            <use xlinkHref="/assets/img/icons.svg#flag-uk"></use>
          </svg>
          <svg className="w-3 h-3" fill="currentColor">
            <use xlinkHref="/assets/img/icons.svg#down-arrow"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PromoCardsSection;
