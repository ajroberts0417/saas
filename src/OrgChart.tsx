import { MarqueeDemo } from "./components/orgchart/OrgMarquee";

export function OrgChart() {
    return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
            <MarqueeDemo />
        </div>
    );
}
