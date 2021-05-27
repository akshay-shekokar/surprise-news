const getUniqueNumbers = () => {
    const numbers = new Set();

    while(numbers.size < 9) {
        numbers.add(Math.floor(Math.random() * 9 + 1));
    } 

    return [...numbers];
};

export default getUniqueNumbers;