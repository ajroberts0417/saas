import { BentoDemo } from "./BentoGrid";


export function GameScreen() {
    return (
        <div className="relative flex h-[50%] w-[70%] items-center justify-center overflow-hidden bg-background">
            <BentoDemo />
        </div>
    );
}
