import Record from "../../models/record";

export const list = async (req, res) => {
  const id = req.params.id;

  try {
    const records = await Record.find({ userId: id }).sort({ date: 1 });
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

export const writeRecord = async (req, res) => {
  const { 
    maxStrL,
    maxStrR,
    powerL,
    powerR,
    RSIAvg1st,
    RSIAvg2nd,
    RSIMax1st,
    RSIMax2nd,
    reactionRate1st,
    reactionRate2nd,
    agilityFrontBack1st,
    agilityFrontBack2nd,
    agilityLeftRight1st,
    agilityLeftRight2nd,
    bodyRotationAbilityL,
    bodyRotationAbilityR,
    gripStrengthL,
    gripStrengthR,
  } = req.body;
  try {
    const record = new Record({
      userId: req.params.id,
      date: new Date(),
      maxStrL,
      maxStrR,
      powerL,
      powerR,
      RSIAvg1st,
      RSIAvg2nd,
      RSIMax1st,
      RSIMax2nd,
      reactionRate1st,
      reactionRate2nd,
      agilityFrontBack1st,
      agilityFrontBack2nd,
      agilityLeftRight1st,
      agilityLeftRight2nd,
      bodyRotationAbilityL,
      bodyRotationAbilityR,
      gripStrengthL,
      gripStrengthR,
    });
    await record.save();
    res.json({ status: 'success'});    
  } catch (e) {
    res.status(500);
  }
};
