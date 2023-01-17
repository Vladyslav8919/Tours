import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
        <div>
          <ul>
            {tours.map((tour) => (
              <Tour removeTour={removeTour} key={tour.id} {...tour} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Tours;
