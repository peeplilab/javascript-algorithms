let textRotation = (str) => {
    setInterval(() => {
        let r = str[str.length - 1] + str.substring(0, str.length - 1);
        console.log(r);

    }, 100)

}

textRotation('abcdefg');