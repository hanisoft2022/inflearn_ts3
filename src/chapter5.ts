const cat = { name: "야옹이", color: "yellow" };
cat.name = "양옹이";

const cat2 = { name: "야옹이", color: "yellow" } as const;
// cat2.name = "양옹이";

let num: number = 10;
num.toFixed(2);
