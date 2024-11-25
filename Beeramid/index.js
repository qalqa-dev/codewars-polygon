// Returns number of complete beeramid levels
function beeramid(bonus, price) {
    let level = 1;
    while (bonus > 0 && level ** 2 * price <= bonus) {
        bonus -= level ** 2 * price;
        level++;
    }
    return level - 1;
}

console.log(beeramid(9, 2));
