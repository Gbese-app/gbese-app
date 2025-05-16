import { useState } from 'react';
import '../GbeQuestions.css';

const GbeQuestions = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is GBESE?',
      answer:
        'GBESE is a peer-to-peer transfer platform that lets you move your debt (aka gbese) to someone else – with their consent...',
    },
    {
      question: "Why would someone accept someone else's debt?",
      answer:
        'Because it comes with perks. Receivers can earn incentives...',
    },
    {
      question: 'How secure is Gbese?',
      answer:
        'Gbese uses bank-level encryption to protect all your data...',
    },
    {
      question: 'What is the "Wealth Redistribution Index"?',
      answer:
        "It’s a gamified metric that tracks how much gbese you’ve shifted upward...",
    },
  ];

  return (
    <div className="gbe-container">
      <h1 className="gbe-heading">Got Gbese Questions?</h1>
      <p className="gbe-subheading">All your burning questions answered. No long talk.</p>

      <div className="accordion-container">
        {faqs.map((faq, index) => (
          <div key={index} className="accordion-item">
            <div className="question-header" onClick={() => toggleAccordion(index)}>
              <span className="question-text">{faq.question}</span>
              <span className="arrow">{expanded === index ? '▲' : '▼'}</span>
            </div>
            {expanded === index && (
              <div className="answer">
                <p className="answer-text">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GbeQuestions;
