//
// function createListItemInner(dataNode) {
//     let spanElement = document.createElement("span");
//     spanElement.innerText = dataNode.title;
//     let listItem = document.createElement("div");
//     listItem.classList.add("list-item__inner");
//     let imgArrow = document.createElement("img");
//     imgArrow.src = "img/chevron-down.png";
//     imgArrow.classList.add('listItem__arrow');
//     let imgFolder = document.createElement("img");
//     imgFolder.src = "img/folder.png";
//     imgFolder.classList.add('listItem__folder');
//     if (dataNode.hasChild !== true) {
//         imgArrow.style.visibility = 'hidden'
//     }
//     listItem.appendChild(imgArrow);
//     listItem.appendChild(imgFolder);
//     listItem.appendChild(spanElement);
//
//     return listItem;
// }
//
// function renderTreeView(dataNode, parentNode) {
//     let divElement = document.createElement("div");
//     divElement.classList.add("list-item");
//     if(dataNode.hasChild === true) {
//         divElement.setAttribute("data-parent", "");
//         divElement.classList.add('list-item_open');
//     }
//     let listItem = createListItemInner(dataNode);
//     divElement.appendChild(listItem);
//     let itemsDiv = document.createElement("div");
//     itemsDiv.classList.add("list-item__items");
//     for (let dataItem of dataNode.childItems) {
//         parentNode.appendChild(divElement);
//         itemsDiv.appendChild(
//             renderTreeView(dataItem, parentNode.querySelector("[data-parent]"))
//         );
//     }
//     divElement.appendChild(itemsDiv);
//     return divElement;
// }
//
// window.addEventListener("DOMContentLoaded", () => {
//     document.body.appendChild(document.createElement("div"));
//     document.querySelector("div").classList.add("list-items");
//     renderTreeView(tree, document.querySelector(".list-items"));
//
//     document.querySelectorAll('[data-parent]').forEach((element)=>{
//         element.querySelector('.listItem__arrow').addEventListener('click',(event)=>{
//             element.classList.toggle('list-item_open');
//
//
//         })
//     });
// });

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}

function init() {
    const data = {
        name: "Каталог товаров",
        hasChildren: true,
        items: [
            {
                name: "Мойки",
                hasChildren: true,
                items: [
                    {
                        name: "Ulgran",
                        hasChildren: true,
                        items: [
                            {
                                name: "Smth",
                                hasChildren: false,
                                items: [],
                            },
                            {
                                name: "Smth",
                                hasChildren: false,
                                items: [],
                            },
                        ],
                    },
                    {
                        name: "Vigro Mramor",
                        hasChildren: false,
                        items: [],
                    },
                    {
                        name: "Handmade",
                        hasChildren: true,
                        items: [
                            {
                                name: "Smth",
                                hasChildren: false,
                                items: [],
                            },
                            {
                                name: "Smth",
                                hasChildren: false,
                                items: [],
                            },
                        ],
                    },
                    {
                        name: "Vigro Glass",
                        hasChildren: false,
                        items: [],
                    },
                ],
            },
            {
                name: "Фильтры",
                hasChildren: true,
                items: [
                    {
                        name: "Ulgran",
                        hasChildren: true,
                        items: [
                            {
                                name: "Smth",
                                hasChildren: false,
                                items: [],
                            },
                            {
                                name: "Smth",
                                hasChildren: false,
                                items: [],
                            },
                        ],
                    },
                    {
                        name: "Vigro Mramor",
                        hasChildren: false,
                        items: [],
                    },
                ],
            },
        ],
    };


    const items = new ListItems(document.getElementById('list-items'), data)
    items.render();
    items.init();




    function ListItems(el, data) {
        this.el = el;
        this.data = data;

        this.init = function () {
            const parents = this.el.querySelectorAll('[data-parent]')

            parents.forEach(parent => {
                const open = parent.querySelector('[data-open]')

                open.addEventListener('click', (e) => {
                    this.toggleItems(parent)
                    console.log(this);
                })
            })
        }

        this.render = function () {
            this.el.insertAdjacentHTML('beforeend', this.renderParent(this.data))
        }

        this.renderParent = function (data) {


            if (data.hasChildren) {
                return `
            <div class="list-item" data-parent>
                <div class="list-item__inner">
                    <img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" data-open>
                    <img class="list-item__folder" src="img/folder.png" alt="folder">
                    <span>${data.name}</span>
                </div>
                 <div class="list-item__items">
                    ${data.items.map(
                        item => this.renderParent(item)
                ).join('')}
                 </div>
             </div>
            `
            } else {
                return this.renderChildren(data)
            }

        }

        this.renderChildren = function (data) {
            return `
                <div class="list-item">
                    <div class="list-item__inner">
                        <img class="list-item__arrow" src="img/chevron-down.png" alt="chevron-down" >
                        <img class="list-item__folder" src="img/folder.png" alt="folder">
                        <span>${data.name}</span>
                     </div>
                </div>
            `
        }

        this.toggleItems = function (parent) {
            parent.classList.toggle('list-item_open')

        }
    }

}

