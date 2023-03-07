import UserModel from "../Modals/usersModal.js";
import bcrypt from "bcrypt";
//Registering a user
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPasswor = await bcrypt.hash(password, salt);

  const newUser = new UserModel({
    username,
    password: hashedPasswor,
    firstname,
    lastname,
  });

  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//login a user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserModel.findOne({ username });
    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      validity
        ? res.status(200).json(user)
        : res.status(400).json("Worng password");
    } else {
      res.status(404).json("Did not find user");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};