import item from './item.js';
const foo = 'bar';

const items = [];
const hideCheckedItems = false;

function findById (id){
  const item = store.items.find(item => item.id === id);
  return item;
}

function addItem(name) {
  try {
    item.validateName(name);
    return items.push(item.create(name));
  } catch (err) {
    console.log(error.message);
  }
}

function findAndToggleChecked (id){
  let result = this.findById(id);
  return result.checked = !result.checked;
}

function toggleCheckedFilter() {
  hideCheckedItems = !hideCheckedItems;
  return hideCheckedItems;
}

function findAndUpdateName (id, newName) {
  try {
      item.validateName(newName);
      let result = findById(id);
      result.name = result.newName;
  } catch (error) {
    console.log(`${error.message}`);
  }
}

function findAndDelete (id){
  const index = items.findIndex((item) => item.id === id);
  return items.splice(index, 1);
}
export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter,
};

