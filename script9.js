const {log: _} = console;
// Q56: Transform flat list to nested list:
const flatList = [
  {
    id: 1,
    name: "level 1 item 1",
    parentId: null,
  }, 
  {
    id: 2,
    name: "level 1 item 2",
    parentId: null,
  }, 
  {
    id: 3,
    name: "level 2 item 3",
    parentId: 1,
  }, 
  {
    id: 4,
    name: "level 3 item 4",
    parentId: 3,
  }, 
  {
    id: 5,
    name: "level 2 item 5",
    parentId: 2,
  }, 
]


/*output:

[
  {
    id: 1, 
    children: [
      {
        id: 3,
        children: [
          {
            id: 4,
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    children: [
      {
        id: 5,
        children: []
      }
    ]
  }
]
*/

// TODO:
// 1. Get root elements.
// 2. Check children if they have children.
// 3. if not -> return item with empty array.
// 4. if yes -> go to #2.

const addChildren = (item) => {
  const childItem = flatList.filter(child=>child.parentId === item.id);

  let nestedChildren = [];

  if(childItem.length > 0){
    nestedChildren = childItem.map(child=>addChildren(child));
  }

  return Object.assign({}, item, {children: nestedChildren});
}


const nestedList = flatList.filter(item=>item.parentId === null).map(addChildren);

_(nestedList);