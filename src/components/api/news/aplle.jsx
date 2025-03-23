import React, { useState, useEffect } from "react";

const AppleNews = () => {
   const [news, setNews] = useState([]);
   const [loading, setLoading] = useState(true);
   const API_KEY = "6e54da3c950e4f5ab9c35c488ce8cbb5";
   const API_URL = `https://newsapi.org/v2/everything?q=apple&from=2025-03-22&to=2025-03-22&sortBy=popularity&apiKey=${API_KEY}`;

   async function fetchData() {
      try {
         const res = await fetch(API_URL);

         if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
         }

         const data = await res.json();
         console.log(data);

         setNews(data.articles || []);
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
      <div className="max-w-40xl mx-auto p-4">
         <h2 className="text-2xl font-bold text-center mb-4">Apple News</h2>
         {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
         ) : news.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
               {news.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                     {item.urlToImage && (
                        <img
                           src={item.urlToImage}
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

export default AppleNews;
