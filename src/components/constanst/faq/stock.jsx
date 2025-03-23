import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

export default function NewsFaq() {
  const [isOpen, setIsOpen] = useState(false);

  const stockNewsLinks = [
    { question: 'Microsoft Stock News', url: 'https://www.reuters.com/companies/MSFT.O' },
    { question: 'Nvidia Stock News', url: 'https://www.reuters.com/companies/NVDA.O' },
    { question: 'Meta (Facebook) Stock News', url: 'https://www.reuters.com/companies/META.O' },
    { question: 'Berkshire Hathaway Stock News', url: 'https://www.reuters.com/companies/BRK-B.N' },
    { question: 'Tesla Stock News', url: 'https://www.reuters.com/companies/TSLA.O' },
    { question: 'Netflix Stock News', url: 'https://www.reuters.com/companies/NFLX.O' },
    { question: 'Apple Stock News', url: 'https://www.cnbc.com/quotes/AAPL' },
    { question: 'Amazon Stock News', url: 'https://www.cnbc.com/quotes/AMZN' },
    { question: 'Alphabet (Google) Stock News', url: 'https://www.cnbc.com/quotes/GOOG' },
    { question: 'Adobe Stock News', url: 'https://www.cnbc.com/quotes/ADBE' },
    { question: 'Shopify Stock News', url: 'https://www.cnbc.com/quotes/SHOP' },
    { question: 'Spotify Stock News', url: 'https://www.cnbc.com/quotes/SPOT' },
    { question: 'Square Stock News', url: 'https://www.cnbc.com/quotes/SQ' },
    { question: 'Intel Stock News', url: 'https://www.cnbc.com/quotes/INTC' },
    { question: 'Zoom Video Communications Stock News', url: 'https://www.cnbc.com/quotes/ZM' },
    { question: 'PayPal Stock News', url: 'https://www.cnbc.com/quotes/PYPL' },
    { question: 'Uber Technologies Stock News', url: 'https://www.cnbc.com/quotes/UBER' },
    { question: 'Airbnb Stock News', url: 'https://www.cnbc.com/quotes/ABNB' },
    { question: 'AMD Stock News', url: 'https://www.cnbc.com/quotes/AMD' },
    { question: 'Coinbase Stock News', url: 'https://www.cnbc.com/quotes/COIN' },
  ];

  return (
    <section style={{ padding: '20px' }}>
      <motion.div
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
        }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>More Stock News Links</span>
        {isOpen ? (
          <FaMinusCircle size={20} style={{ marginLeft: '10px' }} />
        ) : (
          <FaPlusCircle size={20} style={{ marginLeft: '10px' }} />
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              marginTop: '10px',
              padding: '10px 0',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                paddingLeft: '20px',
                margin: 0,
              }}
            >
              {stockNewsLinks.map((link, index) => (
                <motion.li
                  key={index}
                  style={{
                    fontSize: '1rem',
                    marginBottom: '10px',
                    color: '#007bff',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: '#007bff',
                      display: 'inline-block',
                      transition: 'text-decoration 0.3s ease',
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = 'underline')}
                    onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    {link.question}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
