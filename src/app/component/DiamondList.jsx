"use client"
import React, { useState, useEffect, useCallback } from 'react';

const DiamondList = () => {
  const [diamonds, setDiamonds] = useState([]); // Holds all fetched diamonds
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false); // To show loading state
  const [hasMore, setHasMore] = useState(true); // To check if there's more data

  // The number of items per page
  const itemsPerPage = 30;

  // Fetch the data from public JSON file
  const fetchDiamonds = useCallback(() => {
    setLoading(true);

    fetch('/data.json')  // Assuming your JSON is stored in the public folder
      .then((response) => response.json())
      .then((data) => {
        const allDiamonds = data.diamonds;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        // Get the current page slice of diamonds
        const pageDiamonds = allDiamonds.slice(startIndex, endIndex);

        // Update the diamonds state and loading state
        setDiamonds((prevDiamonds) => [...prevDiamonds, ...pageDiamonds]);

        // Check if there's more data
        if (endIndex >= allDiamonds.length) {
          setHasMore(false); // No more data to load
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching diamonds:', error);
        setLoading(false);
      });
  }, [page]);

  // Load diamonds when the component mounts or when the page changes
  useEffect(() => {
    fetchDiamonds();
  }, [fetchDiamonds]);

  // Detect when user has scrolled to the bottom
  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    
    // If scrolled to the bottom, and not already loading or if more data is available
    if (bottom && !loading && hasMore) {
      setPage((prevPage) => prevPage + 1); // Load next page of diamonds
    }
  };

  return (
    <div
      style={{ overflowY: 'auto' }} // Let the browser handle the scroll
      onScroll={handleScroll}  // Scroll event handler
    >
      <h1>Diamond List</h1>

      <ul>
        {diamonds.map((diamond) => (
          <li key={diamond.id}>
            <strong>{diamond.stock_num}</strong>
            <p>Price: ${diamond.total_sales_price}</p>
            <p>Size: {diamond.size} ct</p>
            <p>Color: {diamond.color}</p>
            <p>Clarity: {diamond.clarity}</p>
            <p>Cut: {diamond.cut}</p>
          </li>
        ))}
      </ul>

      {/* Show loading spinner while fetching */}
      {loading && <p>Loading more diamonds...</p>}

      {/* Show message if no more data is available */}
      {!hasMore && <p>No more diamonds to load.</p>}
    </div>
  );
};

export default DiamondList;
