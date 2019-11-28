import db from "../models";

const { Member } = db;
class MemberHelper {
  static async createNewMember(req) {
    const {
      names,
      gender,
      phoneNumber,
      email,
      position,
      birthDate,
      placeOfBaptism,
      dateOfBaptism,
      district,
      sector,
      cell,
      village,
      work
    } = req.body;
    try {
      const member = await Member.create({
        names,
        gender,
        phoneNumber,
        email,
        position,
        birthDate,
        placeOfBaptism,
        dateOfBaptism,
        district,
        sector,
        cell,
        village,
        work
      });
      return member;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
}

export default MemberHelper;
