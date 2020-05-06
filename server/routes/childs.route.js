const router = require("express").Router();
const { Students, Groups, Parents } = require("../schemas/index.schemas");

router.post("/child", async (req, res) => {
  const { groupID, parentID } = req.body;
  try {
    const studentGroup = await Groups.findOne({ inviteID: groupID });
    const parent = await Parents.findOne({ _id: parentID });
    if (studentGroup === null) {
      return res.send({ message: "GroupID Incorrect" });
    }
    const { school, group, assignments } = studentGroup;
    const student = new Students({
      ...req.body,
      school,
      group,
      assignments,
      parentName: `${parent.firstName} ${parent.lastName}`,
    });
    const newStudent = await student.save();
    await Groups.updateOne(
      { _id: studentGroup._id },
      {
        $set: { students: [...studentGroup.students, newStudent._id] },
      }
    );
    await Parents.updateOne(
      { _id: parent._id },
      {
        $set: { childs: [...parent.childs, newStudent._id] },
      }
    );

    res.send(newStudent);
  } catch (error) {
    return res.send({ message: error.message });
  }
});

router.get("/child", async (req, res) => {
  const { id } = req.query;
  const students = await Students.find({ parentID: id });
  res.send(students);
});
module.exports = router;
