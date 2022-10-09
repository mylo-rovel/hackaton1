import React, {useState} from 'react';
import './SquaredRoulette.css';

function cleanBoard(selectedID: string) {
    if (selectedID === '') return;
    const element = document.getElementById(selectedID);
    if (element === null) return;
    element.classList.remove("highlighted");
}

function startGame (selectedID:string, setID: React.Dispatch<React.SetStateAction<string>>) {
    cleanBoard(selectedID);
    const leaps = Math.floor(5 + Math.random()*5);
    for (let i = 0; i < leaps; i++) {
        const [randomSide, randomElement] = [Math.floor(3*Math.random()) , Math.floor(3*Math.random())];
        const choosenID = `${randomSide}#${randomElement}`;
        const element = document.getElementById(choosenID);
        if (element === null) continue;
        setTimeout(() => {
            element.classList.add("highlighted");
            setTimeout(() => { 
                if (i === leaps-1) { //DON'T ERASE THE FINAL FRAME
                    setID(choosenID);
                    if (element.textContent === null) return
                    displaySelectionAtCenter(element.textContent);
                    return;
                }
                element.classList.remove("highlighted");
            }, 500);
        }, i*750);
    }
}

function displaySelectionAtCenter(selectedChar:string) {
    const element = document.getElementById("startGameButton");
    if (element === null) return;
    element.textContent = selectedChar;
    element.classList.add("with-big-font");
}

function getMatrixSubList (index:number, matrix:string[][]) {
    index = Math.min(matrix.length, Math.max(0, index));
    const subList = matrix[index];
    return subList.reduce((acc:JSX.Element[], letter:string, subIndex:number) => {
        return [...acc, <p id={`${index}#${subIndex}`} key={`letterKey_${subIndex}`}>{letter}</p>];
    }, []);
}

function SquaredRoulette() {
    // const [boardIsBusy, setBoardIsBusy] = useState<boolean>(false); //TODO: dont let this work if is busy
    const [selectedID, setSelectedID] = useState<string>('');
    const greekLettersMatrix = [ ["α", "β", "γ"],  ["δ", "ε", "ζ"], ["η", "θ", "ι"], ["κ", "λ", "μ"] ];
    return (
        <section className="rouletteSection">
            
            <section className="top-section">
                <div className="shouldBeInvisible"></div>
                <article className="center">{getMatrixSubList(0, greekLettersMatrix)}</article>
                <div className="shouldBeInvisible"></div>
            </section>

            <section className="middle-section">
                <article className="left-most">{getMatrixSubList(3, greekLettersMatrix)}</article>
                <button id="startGameButton" onClick={()=>{startGame(selectedID, setSelectedID)}}>
                    Start game
                </button>
                <article className="right-most">{getMatrixSubList(1, greekLettersMatrix)}</article>
            </section>

            <section className="base-section">
                <div className="shouldBeInvisible"></div>
                <article className="center">{getMatrixSubList(2, greekLettersMatrix)}</article>
                <div className="shouldBeInvisible"></div>
            </section>
        </section>
    );
}

export default SquaredRoulette;