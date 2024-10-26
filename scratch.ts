

const colors = ["#003884", "#FF6600", "#FFFFFF"];
const results = new Map<number, number>();

for (let i = 0; i < 1000; i++) {
    const randomIndex = Math.floor(Math.random() * (colors.length));
    results.set(randomIndex, (results.get(randomIndex) || 0) + 1);
}

console.log("Results:");
results.forEach((count, index) => {
    console.log(`Index ${index}: ${count} occurrences`);
});
