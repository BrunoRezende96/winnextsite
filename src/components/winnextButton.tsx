import PrimaryButton from "./primaryButton";
import PrimaryButtonMidle from "./primaryButtonMidle";
import PrimaryButtonXS from "./PrimaryButtonXS";

type ButtonType = "XS" | "small" | "large";

interface WinnextButtonProps {
  buttonType: ButtonType;
  fade?: boolean;
}

export default function WinnextButton({ buttonType, fade = true }: WinnextButtonProps) {
  return (
    <div
      style={{ transitionDuration: "2500ms" }}
      className={`transition-opacity ease-in-out ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      {buttonType === "XS" && <PrimaryButtonXS />}
      {buttonType === "small" && <PrimaryButton />}
      {buttonType === "large" && (
        <div className="w-full h-[150px] flex">
          <PrimaryButtonMidle />
        </div>
      )}
    </div>
  );
}
