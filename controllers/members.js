import MemberHelper from "../helpers/members";

class Members {
  static async createMember(req, res) {
    try {
      const result = await MemberHelper.createNewMember(req);
      return res.status(201).send({
        result
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log("error>>>>>", error);
    }
  }
}
export default Members;
