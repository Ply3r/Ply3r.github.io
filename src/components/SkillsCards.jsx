import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import SkillCard from './SkillCard.jsx';
import data from '../data.js';

const SkillsCards = () => {
  const [front, setFront] = useState([]);
  const [back, setBack] = useState([]);

  const getSkills = () => {
    const { skills } = data;
    const frontSkills = [];
    const backSkills = [];
    skills.forEach((skill) => skill.type === 'front' ? frontSkills.push(skill) : backSkills.push(skill));
    setFront(frontSkills);
    setBack(backSkills);
  };

  const changeOrder = (icons, index) => {
    const [skills, callback] = icons;

    const card = skills[index];
    const newSkills = skills.filter((_value, i) => i !== index);

    if (index === skills.length - 1) return callback([card, ...newSkills]);
    callback([...newSkills, card]);
  }

  const renderIcons = (icons) => {
    const [skills] = icons
    const elements = skills.map(({ name, img }, index) => (
      <SkillCard 
        id={ index }
        changeOrder={ changeOrder }
        icons={ icons }
        name={ name }
        img={ img }
      />
    ));

    return elements;
  }

  useEffect(() => {
    getSkills();
  }, [])

  return (
    <div className="skill-cards-container">
      <div>
        <h3>Front-end</h3>
        <div className="skills-icons">
          { renderIcons([front, setFront]) }
        </div>
      </div>
      <div>
        <h3>Back-end</h3>
        <div className="skills-icons">
          { renderIcons([back, setBack]) }
        </div>
      </div>
    </div>
  )
}

export default SkillsCards;