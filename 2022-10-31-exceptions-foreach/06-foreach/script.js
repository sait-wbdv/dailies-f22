const moods = ['happy', 'sad', 'excited'];

const handleItem = function(item, index) {
  console.log(index, item);
}

moods.forEach(handleItem);
// happy
// sad
// excited