// get id
const getId = (id) => {
  const sectionId = document.getElementById(id);
  return sectionId;
};

// get input fiels
const getInputValue = (id) => {
  const field = getId(id).value;
  return field;
};
