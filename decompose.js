function decompose(n) {
    function helper(remaining, current) {
        if (remaining === 0) return current;
        for (
            let i = Math.min(n - 1, Math.floor(Math.sqrt(remaining)));
            i > 0;
            i--
        ) {
            if (!current.includes(i)) {
                const result = helper(remaining - i * i, [i, ...current]);
                if (result) return result;
            }
        }
        return null;
    }

    return helper(n * n, []) || null;
}

console.log(decompose(625));
