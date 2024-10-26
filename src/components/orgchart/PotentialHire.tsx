// Employee Component.

import type { PotentialHire } from "../../data/orgchart/types";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface PotentialHireComponentProps {
    potentialHire: PotentialHire;
}

const PotentialHireComponent = ({ potentialHire }: PotentialHireComponentProps) => {
    const { name, type, cash, culture, trouble, cost, numberRemaining } = potentialHire;
    return (
        <Card className="min-w-40">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{type}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>IMAGE</p>
            </CardContent>
            <CardFooter>
                <div className="flex flex-col justify-center text-xs space-y-1">
                    <p>Cash: ${cash}</p>
                    <p>Culture: {culture}</p>
                    <p>Trouble: {trouble.toString()}</p>
                    <p>Cost: {cost}</p>
                    <p>Number: {numberRemaining}</p>
                    <Button>Buy</Button>
                </div>
            </CardFooter>
        </Card>
    );
};

export default PotentialHireComponent;
