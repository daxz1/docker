module.exports = (mongoose) => {
  return [{
    name: { type: String, required: true },
    email: { type: String }
  }, {
    timestamp: true,
    createdby: true,
    updatedby: true
  }]
}
