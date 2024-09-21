// src/components/CharacterDetail.js
import React from 'react';
import { useParams } from 'react-router-dom'; // To get the character name from the URL

function CharacterDetail() {
  const { characterName } = useParams(); // Get characterName from the route
  const characterDetails = {
    Naruto: {
      name: 'Naruto Uzumaki',
      story:
        ' Naruto Uzumaki is the central protagonist of Naruto, one of the most iconic and beloved characters in anime and manga history. Born in the Hidden Leaf Village (Konohagakure), Narutos life began under tragic circumstances. As a newborn, he became the host for the fearsome Nine-Tails (Kurama), a powerful fox demon that had attacked the village, causing widespread devastation. To save the village, the Fourth Hokage, Minato Namikaze—who was also Naruto’s father—sealed the Nine-Tails inside Naruto, but in doing so, he and his wife, Kushina, lost their lives, leaving Naruto an orphan  Growing up  Naruto was shunned and ostracized by the villagers who feared and resented the demon fox sealed within him. This led to a lonely childhood filled with feelings of isolation and anger. However, Naruto responded to this treatment in his own unique way—through pranks and mischief. His desire to be noticed stemmed from his longing for recognition and acceptance. Despite being considered a troublemaker and underachiever by many, Naruto had a single, unwavering dream: to become the Hokage, the strongest ninja and leader of the village, so that everyone would finally acknowledge him.',
      
      image: 'https://i.ytimg.com/vi/fDNc8G3RAbQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCM2y3K-lnn3JVYoMd8jPo-fY3CHA',
    },
    Goku: {
      name: 'Son Goku',
      story: 'Son Goku is a Saiyan from the Dragon Ball series...',
      image: 'https://example.com/goku.jpg',
    },
    // Add more characters here
  };

  const character = characterDetails[characterName];

  return (
    <div className="character-detail-container">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="character-detail-image" />
      <p>{character.story}</p>
    </div>
  );
}

export default CharacterDetail;
