var buttonTresh = document.getElementById("trash")
var buttonTreshStreet = document.getElementById("streetTrash")
var buttonDanger = document.getElementById("Danger")
var buttonClose

buttonTresh.style.background = "#36281d";
buttonTresh.style.color = "#ffffff";

if (buttonTresh.onclick = function() {

        var url = 'https://backheironka.herokuapp.com/cameras';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send();
        var data = xhr.responseText;
        data = JSON.parse(data);
        list = []
        for (var i = 0; i < data.length; ++i) {
            list[i] = [data[i]['addres_name'], data[i]['photo']];
            console.log(data[i]['photo']);
        }
        prevList = document.getElementsByClassName("listsDL");
        if (prevList.length > 0)
            prevList[0].remove();
        for (var i = 0; i < list.length; ++i) {
            console.log(list[i]);
            var listTag = document.createElement('dl');
            var newLists = document.createElement('dt');
            newLists.setAttribute('class', 'lists');
            var label = document.createElement('label');
            var photoBtn = document.createElement('img');
            var buttonCheckBox = document.createElement('input');
            console.log(list[i][0]);
            label.innerText = list[i][0];
            label.setAttribute('class', 'listLabel');
            photoBtn.setAttribute('class', 'listButton');
            photoBtn.setAttribute('src', list[i][1]);
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
        console.log(list1);
        console.log(prevList);
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
            photoBtn.setAttribute('src', list1[i][1]);
            buttonClose.setAttribute('class', 'listBtnClose');
            buttonClose.setAttribute('id', 'listBtnClose')
            buttonClose.innerHTML = 'X';
            newLists.appendChild(label);
            newLists.appendChild(photoBtn);
            newLists.appendChild(buttonClose);
            if (document.getElementsByClassName('listsDL').length == 0) {
                console.log("True");
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
        console.log("len = " + buttonClose.length);
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
            ["Адрес", "Фото"],
            ["Адрес1", "Фото"],
            ["Адрес2", "Фото"]
        ];
        prevList = document.getElementsByClassName("listsDL");
        console.log(prevList);
        if (prevList.length > 0)
            prevList[0].remove();
        for (var i = 0; i < list2.length; ++i) {
            console.log(list2[i]);
            var listTag = document.createElement('dl');
            var newLists = document.createElement('dt');
            newLists.setAttribute('class', 'lists');
            var label = document.createElement('label');
            var photoBtn = document.createElement('button');
            var buttonClose = document.createElement('button');
            console.log(list2[i][0]);
            label.innerText = list2[i][0];
            label.setAttribute('class', 'listLabel');
            photoBtn.setAttribute('class', 'listButton');
            photoBtn.innerHTML = list2[i][1];
            buttonClose.setAttribute('class', 'listBtnClose');
            buttonClose.setAttribute('id', 'listBtnClose');
            buttonClose.innerHTML = 'X';
            newLists.appendChild(label);
            newLists.appendChild(photoBtn);
            newLists.appendChild(buttonClose);
            if (document.getElementsByClassName('listsDL').length == 0) {
                console.log("True");
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
            console.log(i);
            if (buttonClose[i].onclick = function() {
                    this.parentNode.remove();
                });
        }

        console.log(buttonClose);
        buttonTresh.style.background = "#ccccc5";
        buttonTresh.style.color = "#000000";
        buttonTreshStreet.style.background = "#ccccc5";
        buttonTreshStreet.style.color = "#000000";
        buttonDanger.style.background = "#36281d";
        buttonDanger.style.color = "#ffffff";
    });