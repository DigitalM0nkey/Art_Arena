// Get a random image from picsum between 1 & 1048. Both fields are optional, if only lengh is given you will receive a square photo, if no paramerts are passed it will use the default vale and return a square photo.

// Example of result:
// https://picsum.photos/id/1/1000/1000

const randomImage = (length, width) => {
  const defaultSize = 350;
  const randomNumber = Math.floor(Math.random() * 1048);
  if (!length) {
    length = defaultSize;
  }
  if (!width) {
    width = length;
  }
  return `https://picsum.photos/id/${randomNumber}/${length}/${width}`;
};

