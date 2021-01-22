const getfilm = (film)=>{
    html=`
    <h1>${film.title}</h1>
    <ul>
        <li>description: ${film.description}</li>
        <li> director: ${film. director}</li>
        <il>score: ${film.rt_score}</li>
    </ul>
    `
    return html
}
module.exports={
    getfilm : getfilm 
}
