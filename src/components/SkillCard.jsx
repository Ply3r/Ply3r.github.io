import { useState } from "react";

const SkillCard = ({ id, icons, changeOrder, name, img }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={ () => changeOrder(icons, id) }
      onMouseEnter={ () => {
        setIsActive(true)
      } }
      onMouseLeave={ () => {
        setIsActive(false)
      }}
      key={ `${name} skillCard` }
    >
      <img alt={ `${name} skillCard` } src={ img }/>
      { isActive && <div className="description-card">{ name }</div> }
    </div>
  )
};

export default SkillCard;