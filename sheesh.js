function areYouPlayingBanjo(name) {
    return name.toLowerCase().endsWith('r')
        ? name + ' plays banjo'
        : name + ' does not play banjo';
}

console.log(areYouPlayingBanjo('Ringo'));
