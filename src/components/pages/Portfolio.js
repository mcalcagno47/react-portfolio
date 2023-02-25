import React from 'react';

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
        <section>
            <h4 id="my-work">My Work</h4>
            <figure className="figure">
                <a href="https://so-bad-its-good.herokuapp.com/">
                    <img src="./assets/images/SoBadItsGood.png" alt="A project I made with 3 other bootcamp students" className="work-images-recent"/>
                </a>
                <div>
                    <img src="./assets/images/screenshot.png" alt="a website I repaired from my first homework assignment advertising Search Engine Optimization" className="work-images"/>
                </div>
                <div>
                    <img src="./assets/images/CardsAgainstApathyScreenshot.png" alt="A project I made with 3 other bootcamp students" className="work-images"/>
                </div>
                <div>
                    <img src="./assets/images/FutureProjects3.png" alt="a placeholder until future projects are completed" className="work-images"/>
                </div>
                <div>
                    <img src="./assets/images/FutureProjects4.png" alt="a placeholder until future projects are completed" className="work-images"/>
                </div>
            </figure>
        </section>
    </div>
  );
}
