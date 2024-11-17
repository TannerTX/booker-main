import React, { useState } from 'react';

const entries = [
  "!FREE! Tanner takes a stim shot",
  "Gift didn't arrive in time",
  "John annoys homeowners",
  "Danny becomes unchained",
  "Triston/Derek Snarky remark",
  "Cig Smell",
  "Venkata passing out",
  "Derek upset with Laney",
  "Dade unable to make it",
  "Car crash videos",
  "B - Mentions how awesome the house is",
  "Surprise the sequel",
  "Jews mentioned",
  "War mentioned",
  "Conner food delivery",
  "like like like",
  "Conner glazed by tenants",
  "Venkata drinks > 3 drinks/shots",
  "Fusion recommended",
  "John loitering",
  "Dade potential relationship lore?",
  "B - Horndogs",
  "B - complains about work",
  "Custom 1",
  "Custom 2",
];

const BASE_DATA = {
  embeds: [
    {
      title: '**BINGO ENTRY**',
      description: '', // Placeholder for the entry text
      color: 16711680,
      footer: {
        text: ''
      },
      author: {
        name: ''
      },
      fields: [
        {
          name: ':arrow_up:--------------------:arrow_up:',
          value: '**MARK ON YOUR SHEET**',
          inline: true
        }
      ],
      thumbnail: {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2n9VEaUDVmk59Ce8OsmpLhGdeFWAPBPC6Q&s'
      }
    }
  ],
  content: ''
};

const sendPost = async (description) => {
  const webhookUrl = process.env.SS_WEBHOOK_URL
  const data = {
    ...BASE_DATA,
    embeds: [
      {
        ...BASE_DATA.embeds[0],
        description: description
      }
    ]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log(`Logged entry: "${description}"`);
    } else {
      console.error('Failed to send data to the webhook:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending data to the webhook:', error);
  }
};

const BingoGrid = ({ onButtonClick }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', padding: '20px' }}>
      {entries.map((entry, index) => (
        <button
          key={index}
          onClick={() => onButtonClick(entry)}
          style={{
            padding: '10px',
            fontSize: '14px',
            textAlign: 'center',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {entry}
        </button>
      ))}
    </div>
  );
};

const DictionaryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleButtonClick = (entry) => {
    setSelectedEntry(entry);
    setModalVisible(true);
  };

  const handleModalSubmit = () => {
    if (accessCode === '0000') {
      sendPost(selectedEntry);
      setModalVisible(false);
      setAccessCode('');
    } else {
      alert('Incorrect access code. Please try again.');
    }
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setAccessCode('');
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Secret Santa Bingo</h1>
      <BingoGrid onButtonClick={handleButtonClick} />
      {modalVisible && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            zIndex: 1000,
          }}
        >
          <h3>Enter Access Code</h3>
          <input
            type="password"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            style={{ padding: '5px', fontSize: '14px', marginBottom: '10px', width: '100%' }}
          />
          <button
            onClick={handleModalSubmit}
            style={{
              padding: '10px',
              fontSize: '14px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Submit
          </button>
          <button
            onClick={handleModalClose}
            style={{
              padding: '10px',
              fontSize: '14px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
        </div>
      )}
      {modalVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={handleModalClose}
        />
      )}
    </div>
  );
};

export default DictionaryPage;
