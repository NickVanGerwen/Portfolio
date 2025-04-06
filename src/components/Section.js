/**
 * Section - A reusable component for section headers
 * 
 * This component creates a consistent section header with an optional subtitle.
 * It's used throughout the Home page to maintain a consistent style for section headings.
 * 
 * Props:
 * - id: HTML id attribute for the section (used for navigation/anchors)
 * - title: Main heading text
 * - subtitle: Optional subheading text
 */
import React from 'react';

const Section = ({ id, title, subtitle }) => {
  return (
    <>
      <div id={id} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <p className="HeaderContainer" style={{ fontWeight: 600, textAlign: 'center', fontSize: '48px', color: 'white', width: '100%', margin: '0', paddingTop: '10px' }}>
          {title}
        </p>
      </div>
      {subtitle && (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <p className="HeaderContainer" style={{ textAlign: 'center', fontSize: '18px', color: 'white', width: '100%', margin: '0', paddingBottom: '20px' }}>
            {subtitle}
          </p>
        </div>
      )}
    </>
  );
};

export default Section;
