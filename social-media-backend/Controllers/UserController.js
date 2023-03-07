import UserModel from "../Modals/usersModal.js";
import bcrypt from "bcrypt";
//get USer
export const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await UserModel.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("This User is not registered");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

//upadte USer
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const { currentUser, currentUserAdminStatus, password } = req.body;
  try {
    if (id === currentUser || currentUserAdminStatus) {
      if (password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
      }
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(user);
    } else {
      res.status(404).json("You are not authorize");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};
