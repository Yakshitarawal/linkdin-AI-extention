import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [reply, setReply] = useState<string>('');

  const generateReply = () => {
    // For demo, you can just set a predefined response
    setReply("This is a generated reply to your message.");
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">LinkedIn AI Reply</h1>
      <textarea
        className="border rounded p-2 w-full mt-2"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <button
        className="mt-2 bg-blue-500 text-white p-2 rounded"
        onClick={generateReply}
      >
        Generate Reply
      </button>
      {reply && <div className="mt-4 p-2 border rounded">{reply}</div>}
    </div>
  );
};

export default App;
