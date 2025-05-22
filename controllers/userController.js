import userModel from "../models/userModel.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, { password: 0 });
    res.json({ success: true, data: users });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userModel.findById(id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Prevent deleting other admins
    if (user.role === "admin") {
      return res.status(403).json({ success: false, message: "Cannot delete another admin" });
    }

    await userModel.findByIdAndDelete(id);

    res.json({ success: true, message: "User deleted successfully" });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const updateUserRole = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    if (!['user', 'admin'].includes(role)) {
      return res.json({ success: false, message: "Invalid role" });
    }

    // 2. Prevent self-demotion from admin to user
    if (req.user.id === id && role === 'user') {
      return res.status(403).json({ success: false, message: "You cannot demote yourself from admin to user" });
    }

    const user = await userModel.findByIdAndUpdate(id, { role }, { new: true }).select("-password");
    res.json({ success: true, data: user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {getAllUsers, deleteUser, updateUserRole};
