import "./index.css"
import Checkbox from "./components/Checkbox"
import ItalicText from "./components/ItalicText"
import PlayerButton from "./components/PlayerButton"

export const Homework4 = () => {

    return (
        <div className={'wrap'}>
            <Checkbox />
            <PlayerButton />
            <ItalicText />
        </div>
    )
}