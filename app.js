let p = document.getElementsByClassName('paragraphe')

for (let i=0; i < p.length; i++) {
    p[i].innerHTML = (i + 1).toString();

    if((++i%2) > 0) {
        continue;
    }

    if(i === ((p.length) - 1)) {
        break;
    }
}