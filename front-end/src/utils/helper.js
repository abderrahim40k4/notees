export const validateEmail = (email) =>{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
export const getIntails = (name) =>{
    if (!name) return ("AA");
    const words = name.split("");
    let intails = "";
    for (let i = 0; i < Math.min(words.length, 2); i++) {
        intails += words[i][0];
    }

    return intails.toUpperCase;
}