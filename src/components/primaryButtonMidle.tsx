import { useRef, useState } from "react";

export default function PrimaryButtonMidle() {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const startDrag = () => setDragging(true);

  const moveDrag = (clientX: number) => {
    if (!dragging || !buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    let newX = clientX - rect.left - 40; // metade do círculo
    newX = Math.max(0, Math.min(newX, rect.width - 20)); // limite dentro do botão
    setDragX(newX);
  };

  const endDrag = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const percent = dragX / (rect.width - 40);

    if (percent > 0.7) {
      window.open("https://wa.me/5511977685077", "_blank");
      setDragX(rect.width - 40); // trava no fim
    } else {
      setDragX(0); // volta ao início
    }
    setDragging(false);
  };

  // Handlers para mouse
  const handleMouseDown = () => startDrag();
  const handleMouseMove = (e: React.MouseEvent) => moveDrag(e.clientX);
  const handleMouseUp = () => endDrag();

  // Handlers para toque
  const handleTouchStart = () => startDrag();
  const handleTouchMove = (e: React.TouchEvent) => moveDrag(e.touches[0].clientX);
  const handleTouchEnd = () => endDrag();

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-[400px] h-[60px] bg-transparent border border-white rounded-full flex items-center justify-center select-none overflow-hidden cursor-pointer"
    >
      {/* Barra verde de progresso */}
      <div
        className="absolute left-0 top-0 h-full bg-[#00C37A] rounded-full transition-all duration-200"
        style={{ width: `${dragX + 60}px` }}
      />

      {/* Texto central */}
      <span className="relative text-xl z-10 text-white font-medium pointer-events-none">
        Let’s Talk
      </span>

      {/* Círculo com seta */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{ transform: `translateX(${dragX}px)` }}
        className="absolute left-0 flex items-center justify-center w-10 h-10 bg-[#00C37A] rounded-full z-20 transition-transform duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="white"
          className="w-full h-5 absolute left-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
