import OfferingHelper from "../helpers/offerings";

class Offerings {
  static async createOffering(req, res) {
    try {
      const result = await OfferingHelper.createNewOffering(req);
      return res.status(201).send({
        result
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("error>>>>>", error);
    }
  }
}
export default Offerings;
