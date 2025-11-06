import PrimaryButton from "./primaryButton";
import PrimaryButtonMidle from "./primaryButtonMidle";


export default function ArrayButton() {

    const buttons = [
        {
            small: <PrimaryButton />
        },


        {
            large: <PrimaryButtonMidle />
        }
    ]

    return (
    <>
        {buttons}
    </>
    )
}