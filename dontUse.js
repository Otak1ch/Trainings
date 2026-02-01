const brokenLinks = ['vk','youtube','facebook']
const fixedLinksArray = (linksArray) =>{
    const correctLinks = []
    linksArray.forEach((brokenLink) =>
        correctLinks.push('https://' + brokenLink + '.com'))
    return correctLinks
}
console.log(fixedLinksArray(brokenLinks))