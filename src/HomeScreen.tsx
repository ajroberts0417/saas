import { Link } from "react-router-dom";
import Globe from "./components/ui/globe";
import { RainbowButton } from "./components/ui/rainbow-button";
import { VelocityScroll } from "./components/ui/scroll-based-velocity";


export function HomeScreen() {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
            <VelocityScroll text="SaaS" className="pointer-events-none z-50 font-display md:leading-[10rem] bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl text-transparent font-semibold dark:from-white dark:to-slate-900/10" />
            <Globe className="absolute" />
            <Link to="/game" className="z-50 absolute top-[45%] ">
                <RainbowButton className="text-center text-2xl w-60 font-semibold">
                    New Game
                </RainbowButton>
            </Link>
            <Link to="/game" className="dark z-50 absolute top-[55%]">
                <RainbowButton className="text-center text-2xl w-60 font-semibold">
                    Continue
                </RainbowButton>
            </Link>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    );
}
