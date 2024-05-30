import React, { useState } from "react";
import "./About.css";

export default function About() {
    const [mediaData, setMediaData] = useState([]);
    const [messages, setMessages] = useState([]);

    const handleDirectoryUpload = async (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files);
        const jsonFiles = fileArray.filter(file => file.name === 'messages.json');
        const mediaContents = [];
        const messageContents = [];

        for (const file of jsonFiles) {
            const fileContent = await file.text();
            const jsonData = JSON.parse(fileContent);

            jsonData.forEach(item => {
                if (item.Attachments && item.Attachments.includes('cdn.discordapp.com')) {
                    mediaContents.push({ link: item.Attachments, timestamp: item.Timestamp });
                } else if (item.Contents) {
                    messageContents.push(item.Contents);
                }
            });
        }

        // Sort mediaContents by timestamp in descending order
        mediaContents.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        setMediaData(mediaContents);
        setMessages(messageContents);
    };

    const isMediaLink = (link) => {
        const imageExtensions = ['jpeg', 'jpg', 'gif', 'png'];
        const videoExtensions = ['mov', 'mp4'];
        return imageExtensions.some(ext => link.toLowerCase().includes(`.${ext}`)) || 
               videoExtensions.some(ext => link.toLowerCase().includes(`.${ext}`));
    };

    const isVideoLink = (link) => {
        const videoExtensions = ['mov', 'mp4', 'webm'];
        return videoExtensions.some(ext => link.toLowerCase().includes(`.${ext}`));
    };

    const triggerFileUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.webkitdirectory = true;
        input.directory = true;
        input.multiple = true;
        input.onchange = handleDirectoryUpload;
        input.click();
    };

    return (
        <div className="parent-container">
            <button 
                className="bn632-hover bn21"
                onClick={triggerFileUpload}
            >
                Upload Directory
            </button>
            <div className="media-preview">
                {mediaData.map((item, index) => (
                    <div key={index} className="media-container">
                        {isVideoLink(item.link) ? (
                            <>
                            <p>{item.timestamp}</p>
                            <video controls className="preview-media">
                                <source src={item.link} type="video/mp4" />
                                <source src={item.link} type="video/quicktime" />
                                Your browser does not support the video tag.
                            </video>
                            <br />
                            </>
                        ) : isMediaLink(item.link) ? (
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
        </div>
    );
}
