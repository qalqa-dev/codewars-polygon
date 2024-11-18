function generateHashtag(str) {
    const splited = str.split(' ');
    console.log(str);
    if (
        !str |
        (str.replace(/\s+/g, '') == '') |
        (str.replace(/\s+/g, '').length >= 140)
    ) {
        return false;
    }
    return (
        '#' +
        splited
            .map((element) =>
                (element == undefined) | !element
                    ? element
                    : element[0].toUpperCase() + element.slice(1),
            )
            .join('')
    );
}

console.log(generateHashtag('a'.repeat(140)));
