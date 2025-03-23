import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

export default function NavFaq() {
  const [isOpen, setIsOpen] = useState(false);

  const faqData = [
    { question: 'What is the stock price of Tesla?', url: 'https://www.marketwatch.com/investing/stock/tsla' },
    { question: 'Check Apple Stock Price', url: 'https://www.marketwatch.com/investing/stock/aapl' },
    { question: 'Google Stock Information', url: 'https://www.marketwatch.com/investing/stock/goog' },
    { question: 'Amazon Stock Price', url: 'https://www.marketwatch.com/investing/stock/amzn' },
    { question: 'Microsoft Stock Performance', url: 'https://www.marketwatch.com/investing/stock/msft' },
    { question: 'Stock Data for Nvidia', url: 'https://www.marketwatch.com/investing/stock/nvda' },
    { question: 'Check Meta (Facebook) Stock', url: 'https://www.marketwatch.com/investing/stock/meta' },
    { question: 'Berkshire Hathaway Stock', url: 'https://www.marketwatch.com/investing/stock/brk.b' },
    { question: 'Stock Information for Tesla', url: 'https://www.cnbc.com/quotes/TSLA' },
    { question: 'Stock Price for Netflix', url: 'https://www.cnbc.com/quotes/NFLX' },
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
          textDecoration:"uppercase",
          color:"#093967"
        }}
        onClick={() => setIsOpen(!isOpen)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span>More Stock Links</span>
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
              {faqData.map((faq, index) => (
                <motion.li
                  key={index}
                  style={{
                    fontSize: '1rem',
                    marginBottom: '10px',
                    color: '#093967',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a
                    href={faq.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none',
                      color: '#093967',
                      display: 'inline-block',
                      transition: 'text-decoration 0.3s ease',
                      marginTop:"10px"
                    }}
                    onMouseOver={(e) => (e.target.style.textDecoration = 'none')}
                    onMouseOut={(e) => (e.target.style.textDecoration = 'none')}
                  >
                    {faq.question}
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
