var buttonTresh = document.getElementById("trash")
var buttonTreshStreet = document.getElementById("streetTrash")
var buttonDanger = document.getElementById("Danger")
var archive = document.getElementById("archive")
var buttonClose

buttonTresh.style.background = "#36281d";
buttonTresh.style.color = "#ffffff";

var url = 'https://backheironka.herokuapp.com/cameras';
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.send();
var data = xhr.responseText;
data = JSON.parse(data);
list = []
for (var i = 0; i < data.length; ++i) {
    list[i] = [data[i]['addres_name'], String((i + 1) + '.jpg')];
}
prevList = document.getElementsByClassName("listsDL");
if (prevList.length > 0)
    prevList[0].remove();
for (var i = 0; i < list.length; ++i) {
    var listTag = document.createElement('dl');
    var newLists = document.createElement('dt');
    newLists.setAttribute('class', 'lists');
    var label = document.createElement('label');
    var photoBtn = document.createElement('img');
    var buttonCheckBox = document.createElement('input');
    label.innerText = list[i][0];
    label.setAttribute('class', 'listLabel');
    photoBtn.setAttribute('class', 'listButton');
    photoBtn.setAttribute('src', "first\\" + list[i][1]);

    photoBtn.setAttribute('border', '0');
    photoBtn.setAttribute('tabindex', '1');




    buttonCheckBox.setAttribute('type', 'checkbox');
    buttonCheckBox.setAttribute('class', 'listCheckBox');
    newLists.appendChild(label);
    newLists.appendChild(photoBtn);
    newLists.appendChild(buttonCheckBox);
    if (document.getElementsByClassName('listsDL').length == 0) {
        listTag.setAttribute('class', 'listsDL');
        listTag.appendChild(newLists);
        parents = document.getElementsByClassName('listsDiv');
        parents[0].appendChild(listTag);
    } else {
        parents = document.getElementsByClassName('listsDL');
        parents[0].appendChild(newLists);
    }
}
buttonTresh.style.background = "#36281d";
buttonTresh.style.color = "#ffffff";
buttonTreshStreet.style.background = "#ccccc5";
buttonTreshStreet.style.color = "#000000";
buttonDanger.style.background = "#ccccc5";
buttonDanger.style.color = "#000000";

if (buttonTresh.onclick = function() {

        var url = 'https://backheironka.herokuapp.com/cameras';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        var data = xhr.responseText;
        data = JSON.parse(data);
        list = []
        for (var i = 0; i < data.length; ++i) {
            list[i] = [data[i]['addres_name'], String((i + 1) + '.jpg')];
        }
        prevList = document.getElementsByClassName("listsDL");
        if (prevList.length > 0)
            prevList[0].remove();
        for (var i = 0; i < list.length; ++i) {
            var listTag = document.createElement('dl');
            var newLists = document.createElement('dt');
            newLists.setAttribute('class', 'lists');
            var label = document.createElement('label');
            var photoBtn = document.createElement('img');
            var buttonCheckBox = document.createElement('input');
            label.innerText = list[i][0];
            label.setAttribute('class', 'listLabel');
            photoBtn.setAttribute('class', 'listButton');
            photoBtn.setAttribute('src', "first\\" + list[i][1]);

            photoBtn.setAttribute('border', '0');
            photoBtn.setAttribute('tabindex', '1');

            buttonCheckBox.setAttribute('type', 'checkbox');
            buttonCheckBox.setAttribute('class', 'listCheckBox');
            newLists.appendChild(label);
            newLists.appendChild(photoBtn);
            newLists.appendChild(buttonCheckBox);
            if (document.getElementsByClassName('listsDL').length == 0) {
                listTag.setAttribute('class', 'listsDL');
                listTag.appendChild(newLists);
                parents = document.getElementsByClassName('listsDiv');
                parents[0].appendChild(listTag);
            } else {
                parents = document.getElementsByClassName('listsDL');
                parents[0].appendChild(newLists);
            }
        }
        buttonTresh.style.background = "#36281d";
        buttonTresh.style.color = "#ffffff";
        buttonTreshStreet.style.background = "#ccccc5";
        buttonTreshStreet.style.color = "#000000";
        buttonDanger.style.background = "#ccccc5";
        buttonDanger.style.color = "#000000";
    });

if (buttonTreshStreet.onclick = function() {
        var list1 = [
            ["Ул Пригородная", "trash_street_1.jpg"],
            ["Ул Дачная", "trash_street_2.jpg"],
            ["Ул Линейная", "trash_street_3.jpg"],
            ["Ул Прямая", "trash_street_4.jpg"],
        ];
        prevList = document.getElementsByClassName("listsDL");
        if (prevList.length > 0)
            prevList[0].remove();
        for (var i = 0; i < list1.length; ++i) {
            var listTag = document.createElement('dl');
            var newLists = document.createElement('dt');
            newLists.setAttribute('class', 'lists');
            var label = document.createElement('label');
            var photoBtn = document.createElement('img');
            var buttonClose = document.createElement('button');
            label.setAttribute('class', 'listLabel');
            label.innerHTML = list1[i][0];
            photoBtn.setAttribute('class', 'listButton');
            photoBtn.setAttribute('src', "second\\" + list1[i][1]);

            photoBtn.setAttribute('border', '0');
            photoBtn.setAttribute('tabindex', '1');

            buttonClose.setAttribute('class', 'listBtnClose');
            buttonClose.setAttribute('id', 'listBtnClose')
            buttonClose.innerHTML = 'X';
            newLists.appendChild(label);
            newLists.appendChild(photoBtn);
            newLists.appendChild(buttonClose);
            if (document.getElementsByClassName('listsDL').length == 0) {
                listTag.setAttribute('class', 'listsDL');
                listTag.appendChild(newLists);
                parents = document.getElementsByClassName('listsDiv');
                parents[0].appendChild(listTag);
            } else {
                parents = document.getElementsByClassName('listsDL');
                parents[0].appendChild(newLists);
            }
        }
        buttonClose = document.getElementsByClassName("listBtnClose");
        for (var i = 0; i < buttonClose.length; ++i) {
            if (buttonClose[i].onclick = function() {
                    this.parentNode.remove();
                });
        }

        buttonTresh.style.background = "#ccccc5";
        buttonTresh.style.color = "#000000";
        buttonTreshStreet.style.background = "#36281d";
        buttonTreshStreet.style.color = "#ffffff";
        buttonDanger.style.background = "#ccccc5";
        buttonDanger.style.color = "#000000";
    });

if (buttonDanger.onclick = function() {
        var list2 = [
            ["Ул Пригородная", "1.jpg"],
            ["Ул Дачная", "2.jpg"],
            ["Ул Линейная", "3.jpg"],
        ];
        prevList = document.getElementsByClassName("listsDL");
        if (prevList.length > 0)
            prevList[0].remove();
        for (var i = 0; i < list2.length; ++i) {
            var listTag = document.createElement('dl');
            var newLists = document.createElement('dt');
            newLists.setAttribute('class', 'lists');
            var label = document.createElement('label');
            var photoBtn = document.createElement('img');
            var buttonClose = document.createElement('button');
            label.innerText = list2[i][0];
            label.setAttribute('class', 'listLabel');
            photoBtn.setAttribute('class', 'listButton');
            photoBtn.setAttribute('src', 'third\\' + list2[i][1]);
            photoBtn.setAttribute('border', '0');
            photoBtn.setAttribute('tabindex', '1');
            buttonClose.setAttribute('class', 'listBtnClose');
            buttonClose.setAttribute('id', 'listBtnClose');
            buttonClose.innerHTML = 'X';
            newLists.appendChild(label);
            newLists.appendChild(photoBtn);
            newLists.appendChild(buttonClose);
            if (document.getElementsByClassName('listsDL').length == 0) {
                listTag.setAttribute('class', 'listsDL');
                listTag.appendChild(newLists);
                parents = document.getElementsByClassName('listsDiv');
                parents[0].appendChild(listTag);
            } else {
                parents = document.getElementsByClassName('listsDL');
                parents[0].appendChild(newLists);
            }
        }
        buttonClose = document.getElementsByClassName("listBtnClose");
        for (var i = 0; i < buttonClose.length; ++i) {
            if (buttonClose[i].onclick = function() {
                    this.parentNode.remove();
                });
        }

        buttonTresh.style.background = "#ccccc5";
        buttonTresh.style.color = "#000000";
        buttonTreshStreet.style.background = "#ccccc5";
        buttonTreshStreet.style.color = "#000000";
        buttonDanger.style.background = "#36281d";
        buttonDanger.style.color = "#ffffff";
    });


if (archive.onclick = function() {
        if (document.getElementsByClassName('calen').length == 0) {
            p = document.createElement("p");
            del = document.createElement("div");
            analitik = document.getElementsByClassName('analitik')[0];
            calen = document.createElement("input");
            calen.setAttribute('type', 'month');
            calen.setAttribute('class', 'calen');
            calen.setAttribute('min', '2020-01-01');
            calen.setAttribute('max', '2069-12-31');
            button = document.createElement("a");
            button.setAttribute('href', '#openModal');
            button.setAttribute('font-size', '20px');
            button.innerText = "Выбрать";
            p.appendChild(calen);
            p.appendChild(button);
            del.appendChild(p);
            analitik.appendChild(del);
            if (button.onclick = function() {
                    data = calen.value;
                    console.log(data);
                    dataStart = data + "-01";
                    if (data.split('-')[1] == 12)
                        dataFinish = (Number(data.split('-')[0]) + 1) + '-01-01';
                    else
                        dataFinish = data.split('-')[0] + '-' + (Number(data.split('-')[1]) + 1) + '-01';
                    del.remove();

                    var url = 'https://backheironka.herokuapp.com/call';
                    var xhr = new XMLHttpRequest();
                    xhr.open('POST', url, false);
                    console.log(snd = JSON.stringify({
                        cameraid: 1,
                        datestart: dataStart,
                        dateend: dataFinish
                    }));
                    xhr.send(snd);
                    // xhr.responseXML;
                    // var data = xhr.responseText;
                    // console.log(data);
                    // data = JSON.parse(data);
                    // console.log(data);
                    list = []
                });
        }
    });