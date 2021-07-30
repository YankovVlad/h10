import ModArr from "./H91-ModArr/ModArr"
import Input from "./H92-Two-side-binding/Input"
import { Timepicker } from "./H93-Timepicker/Timepicker"


export const  Homework9 = () => {
    return (
        <div className={'wrap-inner'}>
        <ModArr />
        <Input />
        <Timepicker value={1}/>
        </div>
    )
}