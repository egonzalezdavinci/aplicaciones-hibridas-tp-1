function contentHtml(title, content){
    let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">';
    html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<link rel="stylesheet" type="text/css" href="./css/style.css">';
    html += `<title>${title}</title></head><body>`;
    html += `<header><div><div class="logo"><h1>${title}</h1></div></div></header>`;
    html += `<nav><div>${content}</div></nav>`;
    html += `<main><section></section></main>`;
    html += '</body></html>';
    return html;
}

function contentHtmlProjects(title, content){
    let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">';
    html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<link rel="stylesheet" type="text/css" href="./css/style.css">';
    html += `<title>${title}</title></head><body>`;
    html += `<header><div><div class="logo"><h1>${title}</h1></div></div></header>`;
    html += `<nav><div><a href="/">Volver</a></div></nav>`;
    html += `<main><section>${content}</section></main>`;
    html += '</body></html>';
    return html;
}

function contentHtmlProject(title, content){
    let html = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">';
    html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
    html += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    html += '<link rel="stylesheet" type="text/css" href="../css/style.css">';
    html += `<title>${title}</title></head><body>`;
    html += `<header><div><div class="logo"><h1>${title}</h1></div></div></header>`;
    html += `<nav><div>${content}</div></nav>`;
    html += `<main><section></section></main>`;
    html += '</body></html>';
    return html;
}

export{
    contentHtml,
    contentHtmlProjects,
    contentHtmlProject
}

export default{
    contentHtml,
    contentHtmlProjects,
    contentHtmlProject
}