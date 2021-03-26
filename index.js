const saveDocs = (docs) => docs.map((doc) => doc.save());

const stringToProject = (str) =>
  str.split(" ").reduce(
    (ant, act) => ({
      ...ant,
      [act]: 1,
    }),
    {}
  );

module.exports = { saveDocs, stringToProject };
