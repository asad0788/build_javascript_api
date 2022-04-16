const mongoose = require('mongoose');


module.exports.formatMongoData = (data) => {
  if (Array.isArray(data)) {
    let newDataList = [];
    for (value of data) {
      newDataList.push(value.toObject());
    }
    return newDataList;
  }
  return data.toObject();
}

module.exports.checkObjectId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error(
      "Invalid id"
    );
  }
}