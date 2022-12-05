const tree = {
    title: "Каталог товаров",
    hasChild: true,
    childItems: [
        {
            title: "Мойки",
            hasChild: true,
            childItems: [
                {
                    title: "Ulgran",
                    hasChild: true,
                    childItems: [
                        {
                            title: "Smth",
                            hasChild: false,
                            childItems: [],
                        },
                        {
                            title: "Smth",
                            hasChild: false,
                            childItems: [],
                        },
                    ],
                },
                {
                    title: "Vigro Mramor",
                    hasChild: false,
                    childItems: [],
                },
                {
                    title: "Handmade",
                    hasChild: true,
                    childItems: [
                        {
                            title: "Smth",
                            hasChild: false,
                            childItems: [],
                        },
                        {
                            title: "Smth",
                            hasChild: false,
                            childItems: [],
                        },
                    ],
                },
                {
                    title: "Vigro Glass",
                    hasChild: false,
                    childItems: [],
                },
            ],
        },
        {
            title: "Фильтры",
            hasChild: true,
            childItems: [
                {
                    title: "Ulgran",
                    hasChild: true,
                    childItems: [
                        {
                            title: "Smth",
                            hasChild: false,
                            childItems: [],
                        },
                        {
                            title: "Smth",
                            hasChild: false,
                            childItems: [],
                        },
                    ],
                },
                {
                    title: "Vigro Mramor",
                    hasChild: false,
                    childItems: [],
                },
            ],
        },
    ],
};

function createListItemInner(dataNode) {
    let spanElement = document.createElement("span");
    spanElement.innerText = dataNode.title;
    let listItem = document.createElement("div");
    listItem.classList.add("list-item__inner");
    let imgArrow = document.createElement("img");
    imgArrow.src = "img/chevron-down.png";
    imgArrow.classList.add('listItem__arrow');
    let imgFolder = document.createElement("img");
    imgFolder.src = "img/folder.png";
    imgFolder.classList.add('listItem__folder');
    if (dataNode.hasChild !== true) {
        imgArrow.style.visibility = 'hidden'
    }
    listItem.appendChild(imgArrow);
    listItem.appendChild(imgFolder);
    listItem.appendChild(spanElement);

    return listItem;
}

function renderTreeView(dataNode, parentNode) {
    let divElement = document.createElement("div");
    divElement.classList.add("list-item");
    if(dataNode.hasChild === true) {
        divElement.setAttribute("data-parent", "");
        divElement.classList.add('list-item_open');
    }
    let listItem = createListItemInner(dataNode);
    divElement.appendChild(listItem);
    let itemsDiv = document.createElement("div");
    itemsDiv.classList.add("list-item__items");
    for (let dataItem of dataNode.childItems) {
        parentNode.appendChild(divElement);
        itemsDiv.appendChild(
            renderTreeView(dataItem, parentNode.querySelector("[data-parent]"))
        );
    }
    divElement.appendChild(itemsDiv);
    return divElement;
}

window.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(document.createElement("div"));
    document.querySelector("div").classList.add("list-items");
    renderTreeView(tree, document.querySelector(".list-items"));

    document.querySelectorAll('[data-parent]').forEach((element)=>{
        element.querySelector('.listItem__arrow').addEventListener('click',(event)=>{
            element.classList.toggle('list-item_open');


        })
    });
});
