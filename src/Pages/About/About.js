import React, { useState } from "react";
import "./About.css";
import BONNER from '../../Media/videos/BONNER.webm';

export default function About() {
    const [imageData, setImageData] = useState([]);
    const [messages, setMessages] = useState([]);

    const handleDirectoryUpload = async (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);
        const jsonFiles = fileArray.filter(file => file.name === 'messages.json');
        const imageContents = [];
        const messageContents = [];

        for (const file of jsonFiles) {
            const fileContent = await file.text();
            const jsonData = JSON.parse(fileContent);

            jsonData.forEach(item => {
                if (item.Attachments && item.Attachments.includes('cdn.discordapp.com')) {
                    imageContents.push({ link: item.Attachments, timestamp: item.Timestamp });
                } else if (item.Contents) {
                    messageContents.push(item.Contents);
                }
            });
        }

        // Sort imageContents by timestamp in descending order
        imageContents.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        setImageData(imageContents);
        setMessages(messageContents);
    };

    const isImageLink = (link) => {
        const imageExtensions = ['jpeg', 'jpg', 'gif', 'png'];
        return imageExtensions.some(ext => link.toLowerCase().includes(`.${ext}`));
    };

    return (
        <>
            <input
                className="inputBtn" 
                type="file" 
                webkitdirectory="true" 
                directory="true" 
                multiple 
                onChange={handleDirectoryUpload}
            />
            <div className="image-preview">
                {imageData.map((item, index) => (
                    <div key={index} className="image-container">
                        {isImageLink(item.link) ? (
                            <>
                            <p>{item.timestamp}</p>
                            <img src={item.link} alt={item.timestamp} className="preview-image" />
                            <br />
                            </>
                        ) : (
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.link}
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}
