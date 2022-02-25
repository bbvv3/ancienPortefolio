/**************************************************************************************************/
function cache(id){
    let section = document.getElementById(id);
    section.style.display = 'none';
}

/**************************************************************************************************/
function selection(id){
    cache("experience");
    cache("competence");
    cache("etudes");
    let visible = document.getElementById(id);
    visible.style.display= 'block';
}
