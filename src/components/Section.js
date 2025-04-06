/**
 * Section - A reusable component for section headers
 * 
 * This component creates a consistent section header with an optional subtitle.
 * It's used throughout the Home page to maintain a consistent style for section headings.
 * 
 * The component is now responsive and will adapt to different screen sizes.
 * 
 * Props:
 * - id: HTML id attribute for the section (used for navigation/anchors)
 * - title: Main heading text
 * - subtitle: Optional subheading text
 */
import React from 'react';
import '../styling/Responsive.css';

const Section = ({ id, title, subtitle }) => {
  return (
    <>
      <div id={id} className="section-header" style={{ 
        width: '100%', 
        background: 'linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 100%)'
      }}>
        <div style={{ padding: '0 15px' }}>
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <p className="h2-style" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}>
              {title}
            </p>
          </div>
          {subtitle && (
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <p className="p-style" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}>
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Section;
