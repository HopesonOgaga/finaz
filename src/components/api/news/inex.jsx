import React, { useState, useEffect } from "react";

const NewsComponent = () => {
   const [news, setNews] = useState([]);
   const [loading, setLoading] = useState(true);
   const API_KEY = "f855f663d3a14bf19ac521e62c4f5f76";

   async function fetchData() {
      try {
         const res = await fetch(
            `https://api.worldnewsapi.com/search-news?language=es&text=covid-19+OR+corona&api-key=${API_KEY}`
         );

         if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
         }

         const data = await res.json();
         console.log(data);

         setNews(data.news || []); // Ensure we access the correct data field
      } catch (err) {
         console.error("Error fetching data:", err);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      fetchData();
   }, []);

   return (
      <div className="max-w-4xl mx-auto p-4">
         <h2 className="text-2xl font-bold text-center mb-4">Latest News</h2>
         {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
         ) : news.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               {news.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                     {item.image && (
                        <img
                           src={item.image}
                           alt={item.title}
                           className="w-full h-40 object-cover"
                        />
                     )}
                     <div className="p-4">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <a
                           href={item.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-2 inline-block text-blue-500 hover:underline"
                        >
                           Read more
                        </a>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <p className="text-center text-gray-500">No news found.</p>
         )}
      </div>
   );
};

export default NewsComponent;
