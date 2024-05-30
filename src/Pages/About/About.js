import React, { useState } from "react";
import "./About.css";
import BONNER from '../../Media/videos/BONNER.webm';

export default function About() {
    const [imageLinks, setImageLinks] = useState([]);
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
                    imageContents.push(item.Attachments);
                } else if (item.Contents) {
                    messageContents.push(item.Contents);
                }
            });
        }

        setImageLinks(imageContents);
        setMessages(messageContents);
    };

    const isImageLink = (link) => {
        const imageExtensions = ['jpeg', 'jpg', 'gif', 'png'];
        return imageExtensions.some(ext => link.toLowerCase().includes(`.${ext}`));
    };

    return (
        <>
            <input 
                type="file" 
                webkitdirectory="true" 
                directory="true" 
                multiple 
                onChange={handleDirectoryUpload}
            />
            <div className="image-preview">
                {imageLinks.map((link, index) => (
                    <div key={index} className="image-container">
                        {isImageLink(link) ? (
                            <img src={link} alt="Uploaded content" className="preview-image" />
                        ) : (
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                {link}
                            </a>
                        )}
                    </div>
                ))}
            </div>
            
        </>
    );
}
