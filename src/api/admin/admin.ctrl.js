import User from '../../models/user';
import Reservation from '../../models/reservation';
import Record from '../../models/record';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json({ status: 'success', users });
  } catch (e) {
    res.status(500);
  }
};

export const getRerservation = async (req, res) => {
  try {
    // const Reservation = await Reservation.find().sort({ _id: -1 });
    const events = await Reservation.find();
    res.json({ status: 'success', events });
  } catch (e) {
    res.status(500);
  }
};

export const writeRecord = async (req, res) => {
  const { 
    userId,
    maxStrL,
    maxStrR,
    powerL,
    powerR,
    elasticityAvg1st,
    elasticityAvg2nd,
    elasticityMax1st,
    elasticityMax2nd,
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
      elasticityAvg1st,
      elasticityAvg2nd,
      elasticityMax1st,
      elasticityMax2nd,
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
