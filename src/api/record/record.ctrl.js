import Record from "../../models/record";

export const list = async (req, res) => {
  const id = req.params.id;

  try {
    const records = await Record.find({ userId: id }).sort({ date: -1 });
    res.json({ status: 'success', records: records });
  } catch (e) {
    res.status(500);
  }
};

// export const detail = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const detail = await Record.findById({ _id: id });
//     res.json({ status: 'success', detail: detail });
//   } catch (e) {
//     res.status(500);
//   }
// };