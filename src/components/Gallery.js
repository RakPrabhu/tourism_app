import React from 'react';
import Card from './Card';
import './Gallery.css'; // Update with relevant styling if needed

const Gallery = () => {
  const cardsData = [
    { name: 'Taj Mahal', rating: 5, text: 'A breathtaking symbol of love, the Taj Mahal is an iconic mausoleum and a UNESCO World Heritage site.' },
    { name: 'Rann of Kutch', rating: 4.7, text: 'Experience the vast white salt desert and the vibrant Rann Utsav festival in the Rann of Kutch.' },
    { name: 'Varanasi Ghats', rating: 4.9, text: 'Witness the spiritual ceremonies along the ghats of Varanasi, one of the oldest living cities in the world.' },
    { name: 'Jaipur', rating: 4.8, text: 'Explore the Pink City with its majestic forts, palaces, and vibrant markets in Jaipur.' },
    { name: 'Kerala Backwaters', rating: 5, text: 'A serene and picturesque network of canals and lagoons, perfect for houseboat stays in Kerala.' },
    { name: 'Goa Beaches', rating: 4.6, text: 'Enjoy the sandy shores and lively beach parties at the popular beaches of Goa.' },
    { name: 'Mumbai', rating: 4.4, text: 'Explore the bustling city of Mumbai with its Bollywood glamour, historical landmarks, and vibrant nightlife.' },
    { name: 'Agra Fort', rating: 4.5, text: 'A historical fort in Agra with stunning Mughal architecture and a great view of the Taj Mahal.' },
  ];

  return (
    <section>
        <h2 className="sectionTitle">Travel Experiences in India</h2>
        <div className="gallery">
          <div className="gallery-section">
            <div className="gallery-row">
              {cardsData.slice(0, 4).map((card, index) => (
                <Card key={index} name={card.name} rating={card.rating} text={card.text} />
              ))}
            </div>
          </div>
          <div className="gallery-section">
            <div className="gallery-row">
              {cardsData.slice(4, 8).map((card, index) => (
                <Card key={index} name={card.name} rating={card.rating} text={card.text} />
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Gallery;
