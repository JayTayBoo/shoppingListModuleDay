import item from './store.js';

function validateName (name){
  if (name === ''){
  throw new TypeError("Cannot add item: Name must not be blank")}
}

const create = (name) => {
  return {id: cuid(), name, checked: false};
};

const foo = 'bar';


export default {validateName, create};