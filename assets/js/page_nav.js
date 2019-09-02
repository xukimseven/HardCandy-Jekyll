function pageGo(total) {
    var pageNum = document.getElementById("page_input").value;
    pageNum = pageNum.replace(/\b(0+)/gi, "");
    var action;
    if (pageNum <= 1) {
        action = "/";
    } else {
        if (pageNum > total) {
            pageNum = total;
        }
        action = "/page" + pageNum;
    }
    document.form.action = action;
}
