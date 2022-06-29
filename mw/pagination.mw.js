module.exports = async (req, res, next) => {
  try {
    //?param1=val1&param2=val2
    /* {
param1: val1,
param2: val2
}
*/

    //?limit=30&offset=15
    const {
      query: { limit, offset }
    } = req;
    req.pagination = {
      limit: limit > 50 || limit <= 0 ? 50 : limit,
      offset: offset <= 0 ? 0 : offset
    };
    next();
  } catch (err) {
    next(err);
  }
};
