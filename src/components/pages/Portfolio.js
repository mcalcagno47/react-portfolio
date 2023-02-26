import React from 'react';
import project2Image from '../../assets/images/SoBadItsGood.png'
import project1Image from '../../assets/images/CardsAgainstApathyScreenshot.png'
import homework1Image from '../../assets/images/techblog.png'
import homework2Image from '../../assets/images/notetaker.png'

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
        <section>
            <h4 id="my-work">My Work</h4>
            <figure className="figure">
                <a href="https://so-bad-its-good.herokuapp.com/">
                    <img src={project2Image} alt="A project I made with 2 other bootcamp students" className="portfolioImage"/>
                </a>
                <a href="https://the-fighting-mongooses-official.github.io/Cards-Against-Apathy/">
                    <img src={project1Image} alt="A project I made with 3 other bootcamp students" className="portfolioImage"/>
                </a>
                <a href="https://calcagno-tech-blog.herokuapp.com/">
                    <img src={homework1Image} alt="tech-blog" className="portfolioImage"/>
                </a>
                <a href="https://note-taker-calcagno.herokuapp.com/">
                    <img src={homework2Image} alt="note-taker" className="portfolioImage"/>
                </a>
            </figure>
        </section>
    </div>
  );
}
