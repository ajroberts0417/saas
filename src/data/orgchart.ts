
// if you have too much trouble... you get shut down by the New York Times! haha
// SCANDAL: BREAKING: <SAAS> slammed for unethical practices

// you spend money to increase headcount

// okay so you never make money (lol), you just gain either customers
// or you gain reputation

const allEmployees: AllEmployees = {

};

type AllEmployees = Record<string, Employee>;


type OrgChart = Employee[];


interface Employee {

}

/*
units have:
- popularity (number)
- cash (number)
- trouble (bool)
- passive ability
- active ability
- score ability
- on enter ability

on enter ability:
- permanently increase this units score by 1
- invite another guest
- invite another 2 guests

passive abilities:
- reduce trouble

score abilities:
- gain 2 popularity for each trouble
- gain 1 popularity for each normie

active abilities are:
- boot a guest
- look at the next guest (scry)
- let the next guest in and score them
- score another guest (photographer)
- refresh all abilities
- increase 

*/