/**
 * Calcualte PI value, and separate with decimal
 * @see {@link http://ajennings.net/blog/a-million-digits-of-pi-in-9-lines-of-javascript.html}
 * @param {Number} digits 
 * @returns {String} 
 */
export default function calculatePi(digits) {
    let i = 1n
    let x = 3n * 10n ** (BigInt(digits) + 20n)
    let pi = x
    while (x > 0) {
        x = (x * i) / ((i + 1n) * 4n)
        pi += x / (i + 2n)
        i += 2n
    }
    return (pi / 10n ** 20n).toString().replace(/^(\d{1})(.*)/gi, "$1.$2")
}