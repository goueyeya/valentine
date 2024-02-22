import "./styles.css";
import { useState } from "react";
import imgBears from "./jump-bear.gif";
import imgGift from "./gift.png";
import imgLetter from "./letter.png";
import imgCatFire from "./cat-fire.gif";
import imgIly from "./ily.gif";
import imgTriste1 from "./triste/triste1.jpg";
import imgTriste2 from "./triste/triste2.jpg";
import imgTriste3 from "./triste/triste3.jpg";
import imgTriste4 from "./triste/triste4.jpg";
import imgTriste5 from "./triste/triste5.jpg";
import imgTriste6 from "./triste/triste6.jpg";
import imgTriste7 from "./triste/triste7.jpg";
import imgTriste8 from "./triste/triste8.jpg";
import imgTriste9 from "./triste/triste9.jpg";
import imgTriste10 from "./triste/triste10.jpg";

const phrases = [
  "Non",
  "T'es sûre ?",
  "Romane ?",
  "Romane ??????",
  "T'es sûre à 100% ?",
  "1000% ?",
  "Arrête de cliquer !",
  "AHHHHHHHHH",
  "STOPPPPPPPPPPPPPPPP",
  "Je vais pleurer",
  "Tu me brise le coeur ;(",
];

// Tableau pour stocker les images tristes
const imgTristesArray = [
  imgTriste1,
  imgTriste2,
  imgTriste3,
  imgTriste4,
  imgTriste5,
  imgTriste6,
  imgTriste7,
  imgTriste8,
  imgTriste9,
  imgTriste10,
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [destroy, setDestroy] = useState(false);
  const [opened, setOpened] = useState(false);
  const [openLetter, setOpenLetter] = useState(false);

  function resetPage() {
    setDestroy(false);
    setNoCount(0);
  }

  function getImage() {
    if (noCount === 0) {
      return imgBears;
    } else {
      return imgTristesArray[Math.min(noCount - 1, imgTristesArray.length - 1)];
    }
  }

  const NoButton = () => {
    function handleNoClick() {
      if (noCount === phrases.length - 1) {
        setDestroy(true);
      } else {
        setNoCount(noCount + 1);
      }
    }

    function getNoButtonText() {
      return phrases[Math.min(noCount, phrases.length - 1)];
    }

    return (
      <button onClick={handleNoClick} className="noButton">
        {getNoButtonText()}
      </button>
    );
  };

  return (
    <div className="valentine-container">
      {!opened ? (
        <>
          <img
            alt="gift"
            src={imgGift}
            height="60%"
            className="gift"
            onClick={() => setOpened(true)}
          />
          <h1>TADAAAAA !</h1>
          <p>CADEAU !! (pas mal hein)</p>
          <p>Clique dessus pour l'ouvrir.</p>
        </>
      ) : !openLetter ? (
        <>
          <img
            alt="letter"
            src={imgLetter}
            height="60%"
            className="gift"
            onClick={() => setOpenLetter(true)}
          />
          <h1>Dear Romane</h1>
          <p>
            Merci d'être dans ma vie. <br />
            Tu la rend tous les jours plus brillante que la veille.
            <br /> Avec ta présence mon cœur s'éveille.
            <br /> À jamais, tu es dans ma vie.
          </p>
          <p> Hé, pas mal hein ? </p>
          <p>Non ? D'accord...</p>
          <p>Tu veux la suite ? Clique sur la lettre.</p>
          <br />
        </>
      ) : destroy ? (
        <>
          <img alt="cat on fire" src={imgCatFire} height="60%" />
          <div className="text">
            <p>OK</p>
            <p>
              Très bien je vais te détruire avec plein de bisous et d'amour.
            </p>
            <p>Je te laisse une autre chance</p>
            <p>
              Clique <a onClick={() => resetPage()}>ici</a> pour te sauver.
            </p>
          </div>
        </>
      ) : yesPressed ? (
        <>
          <img alt="bears kissing" src={imgIly} />
          <div className="text">
            <h1>YOUHOUUUU!!!!!</h1>
            <p>Merci d'etre dans ma vie bichette !</p>
            <p>Je t'aime !</p>
            <p className="love-text">Signé : The love of your life.</p>
          </div>
        </>
      ) : (
        <>
          <img
            alt="bears with hearts"
            src={getImage()}
            style={{ height: "400px", width: "400px" }}
          />
          <div>
            <h1>Romane, veux tu être ma valentine ?</h1>
          </div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setYesPressed(true);
              }}
            >
              Oui
            </button>
            <NoButton />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
