import db from "../models";

const { Offerings } = db;
class OfferingHelper {
  static async createNewOffering(req) {
    const {
      date,
      amaturo,
      amashimwe,
      icyacumi,
      inyubako,
      // eslint-disable-next-line camelcase
      offering_collected_by
    } = req.body;
    try {
      const Offering = await Offerings.create({
        date,
        amaturo,
        amashimwe,
        icyacumi,
        inyubako,
        offering_collected_by
      });
      return Offering;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

export default OfferingHelper;
