function dirReduc(arr) {
    let axis = { x: 0, y: 0 };
    const dict = [
        { id: 0, axis: 'y', value: 1, name: 'NORTH' },
        { id: 1, axis: 'y', value: -1, name: 'SOUTH' },
        { id: 2, axis: 'x', value: 1, name: 'EAST' },
        { id: 3, axis: 'x', value: -1, name: 'WEST' },
    ];
    const resArr = [];
    for (const way of arr) {
        switch (way.toUpperCase()) {
            case dict[0].name:
                axis.y++;
                break;
            case dict[1].name:
                axis.y--;
                break;
            case dict[2].name:
                axis.x++;
                break;
            case dict[3].name:
                axis.x--;
                break;
        }
        if (
            resArr.length > 0 &&
            dict.find((d) => d.name === way).value ===
                -dict.find((d) => d.name === resArr[resArr.length - 1]).value
        ) {
            resArr.pop();
        } else {
            resArr.push(way);
        }
    }
    return resArr;
}

console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));
