import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        if (!response.ok) {
          throw new error('there is something  wrong');
        }
        let data = await response.json();
        setData(data);
      } catch (error) {
        setError('something  went wrong', error);
      }
    };
    fetchData();
    //  we got data from fake api using useEffect Hook
  }, []);

  return (
    <div>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="data-card" key={item.id}>
              <h3 className="data-paragraph">{item.id}</h3>
              <p className="data-title">{item.title}</p>
            </div>
          );
        })}

        <p className="error">Error: {error}</p>
      </div>
    </div>
  );
};

export default UseEffect;
