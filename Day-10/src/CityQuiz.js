import { useState } from 'react';

export default function CityQuiz() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing'); // typing, submitting, success

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err.message);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
    setError(null);
  }

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === 'istanbul') {
          resolve();
        } else {
          reject(new Error('Good guess but a wrong answer. Try again!'));
        }
      }, 1500);
    });
  }

  return (
    <div className="city-quiz">
      <form onSubmit={handleSubmit}>
        <h2>City quiz</h2>
        <p>
          What city is located on two continents?
        </p>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button
          disabled={
            answer.length === 0 ||
            status === 'submitting'
          }>
          Submit
        </button>
        {status === 'submitting' && (
          <p>Loading...</p>
        )}
        {error !== null && (
          <p style={{ color: 'red' }}>{error}</p>
        )}
      </form>
      {status === 'success' && (
        <h1>That's right!</h1>
      )}
    </div>
  );
}
