import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Why become a Campus Ambassador ?</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://www.incimages.com/uploaded_files/image/1920x1080/shutterstock_500593225_354026.jpg"
              text="Become a Leader and Accquire leadership Skills"
              label="Leader"
              path="/services"
            />
            <CardItem
              src="https://assets.entrepreneur.com/content/3x2/2000/20181031175613-shutterstock-296302733.jpeg?auto=webp&quality=95&crop=16:9&width=675"
              text="Polish Your Communicating And Public Speaking Skills"
              label="Communication Skills"
              path="/services"
            />
            <CardItem
              src="https://blog.vantagecircle.com/content/images/2021/05/Organizational-Skills-Efficiency.png"
              text="Develop and boost your organisational skills"
              label="Organize"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Lorem Exercitationem rem explicabo tempora voluptatibus."
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
