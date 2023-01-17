import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status} Error occured`);
      const data = await response.json();
      setTours(data);
      console.log(data);
    } catch (err) {
      setIsError(err);
    }
    setIsLoading(false);
    console.log(isError);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  return (
    <main>
      {isLoading && <Loading />}
      {isError && <h3>{isError.message}</h3>}
      {tours.length !== 0 && !isLoading && !isError && (
        <Tours tours={tours} removeTour={removeTour} />
      )}
      {tours.length === 0 && !isLoading && (
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
