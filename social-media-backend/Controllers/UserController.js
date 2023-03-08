import UserModel from "../Models/usersModel.js";
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

//Delete USer
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const { currentUser, currentUserAdminStatus, password } = req.body;
  if (id === currentUser || currentUserAdminStatus) {
    try {
      await UserModel.findByIdAndDelete(id);
      res.status(200).json("User deleted successfully");
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(404).json("You are not authorize");
  }
};

//Follow a User

export const followUser = async (req, res) => {
  const id = req.params.id;
  const { currentUser } = req.body;

  if (currentUser === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUSer = await UserModel.findById(currentUser);
      if (!followUser.followers.includes(currentUser)) {
        await followUser.updateOne({ $push: { followers: currentUser } });
        await followingUSer.updateOne({ $push: { following: id } });
        res.status(200).json("User followed");
      } else {
        res.status(403).json("User is already followed");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
//UnFollow a User

export const unfollowUser = async (req, res) => {
  const id = req.params.id;
  const { currentUser } = req.body;

  if (currentUser === id) {
    res.status(403).json("Action forbidden");
  } else {
    try {
      const followUser = await UserModel.findById(id);
      const followingUSer = await UserModel.findById(currentUser);
      if (followUser.followers.includes(currentUser)) {
        await followUser.updateOne({ $pull: { followers: currentUser } });
        await followingUSer.updateOne({ $pull: { following: id } });
        res.status(200).json("User unfollowed");
      }else{

        res.status(403).json("User is not folowed");
      }
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
};
