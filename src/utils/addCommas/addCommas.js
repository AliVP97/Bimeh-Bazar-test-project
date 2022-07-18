const addCommas = (number) => {
  try {
    if (number.constructor !== Number)
      throw new Error(
        `"number" type is not an Number, it is {${typeof number}}`
      );

    return number.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } catch (error) {
    console.error("An error occured in addCommas function: ", error);
  }
};

export default addCommas;
