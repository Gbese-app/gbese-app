import  { useState } from 'react';

const GbeQuestions = () => {
  // State to track which accordion item is expanded
  const [expanded, setExpanded] = useState(null);

  // Function to toggle the expanded state
  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // FAQ data
  const faqs = [
    {
      question: 'What is GBESE?',
      answer:
        'GBESE is a peer-to-peer transfer platform that lets you move your debt (aka gbese) to someone else – with their consent. It flips traditional credit models by decentralising who holds debt, giving people more freedom and control.',
    },
    {
      question: "Why would someone accept someone else's debt?",
      answer:
        'Because it comes with perks. Receivers can earn incentives (cash, tokens, or reputation points), improve their credit profile, or gain influence in our gamified ecosystem. For users with strong financial capacity, absorbing gbese is a way to give back or game the system.',
    },
    {
      question: 'How secure is Gbese?',
      answer:
        'Gbese uses bank-level encryption to protect all your data and transactions. We’re compliant with all financial regulations and never store your sensitive banking information on our servers.',
    },
    {
      question: 'What is the "Wealth Redistribution Index"?',
      answer:
        "It’s a gamified metric that tracks how much gbese you’ve shifted upward — from those with less capacity to more. Your WRI credits users who help rebalance the system. You’ll see your stats, rankings, and community milestones in real time.",
    },
  ];

  return (
    <div style={styles.container}>
      {/* Heading and Subheading */}
      <h1 style={styles.heading}>Got Gbese Questions?</h1>
      <p style={styles.subheading}>All your burning questions answered. No long talk.</p>

      {/* Accordion */}
      <div style={styles.accordionContainer}>
        {faqs.map((faq, index) => (
          <div key={index} style={styles.accordionItem}>
            {/* Question Header */}
            <div
              style={styles.questionHeader}
              onClick={() => toggleAccordion(index)}
            >
              <span style={styles.questionText}>{faq.question}</span>
              <span style={styles.arrow}>
                {expanded === index ? '▲' : '▼'}
              </span>
            </div>
            {/* Answer (shown when expanded) */}
            {expanded === index && (
              <div style={styles.answer}>
                <p style={styles.answerText}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f5f7fa',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '36px',
    color: 'rgb(2, 19, 70)',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '18px',
    color: '#4a4a4a',
    marginBottom: '40px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  accordionContainer: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  accordionItem: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    marginBottom: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  questionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    cursor: 'pointer',
    backgroundColor: '#f0f5ff',
    borderRadius: '10px',
  },
  questionText: {
    fontSize: '16px',
    color: '#1a3c5e',
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: '14px',
    color: '#4a4a4a',
  },
  answer: {
    padding: '15px 20px',
    backgroundColor: '#f0f5ff',
    borderTop: '1px solid #e0e0e0',
    borderRadius: '0 0 10px 10px',
  },
  answerText: {
    fontSize: '14px',
    color: '#4a4a4a',
    textAlign: 'left',
  },
};

export default GbeQuestions;