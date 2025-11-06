import PrimaryButton from "./primaryButton";
import PrimaryButtonMidle from "./primaryButtonMidle";

type ButtonType = "small" | "large";

interface WinnextButtonProps {
    buttonType: ButtonType;
}

export default function WinnextButton({ buttonType }: WinnextButtonProps) {

    switch (buttonType) {

        case "small":
            return <PrimaryButton />;


        case "large":
            return (
            <div className=" w-full h-[150px] flex">
                <PrimaryButtonMidle />;
            </div>
            );


        default:
            return null;
    }
}
