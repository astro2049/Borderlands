sightsee();

function sightsee() {
    let viewCount = getViewCount();
    let likes = getLikes();
    let upIndex = viewCount === 0 ? 0 : ((likes / viewCount) * 100).toFixed(1);
    addRatioSpan(upIndex);
}

function getViewCount() {
    let viewCountTitle = document
        .getElementsByClassName("video-data")[0]
        .getElementsByTagName("span")[0]
        .getAttribute("title");

    let numberPattern = /\d+/g;
    return parseInt(viewCountTitle.match(numberPattern)[0]);
}

function getLikes() {
    let likeTitle = document
        .getElementsByClassName("like")[0]
        .getAttribute("title");

    let numberPattern = /\d+/g;
    return parseInt(likeTitle.match(numberPattern)[0]);
}

function addRatioSpan(ratio) {
    let ops = document.getElementsByClassName("ops")[0];
    if (ops.getElementsByClassName("ratio").length !== 0) {
        ops.removeChild(ops.getElementsByClassName("ratio")[0]);
    }

    let ratioSpan = document.createElement("span");
    ratioSpan.className = "ratio";
    ratioSpan.innerHTML = "Up index - " + ratio;
    ratioSpan.style.marginLeft = "20px";

    ops.appendChild(ratioSpan);
}
