"use server";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./model";
import { connectDb } from "./utils";
import bcrypt from "bcryptjs";

//----------authorization and authentication--------------//

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { name, email, password, img, confirmpassword } =
    Object.fromEntries(formData);

  if (password !== confirmpassword) {
    return { error: "Passwords do not match" };
  }

  try {
    connectDb();

    const user = await User.findOne({ name });

    if (user) {
      return { error: "Username already exists" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      name,
      email,
      password: hashedpassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (previousState, formData) => {
  const { name, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { name, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw error;
  }
};

//----------------addpost delete post and user etc----------------//

export const addPost = async (previousState, formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectDb();
    const newpost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });
    await newpost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addUser = async (prevState, formData) => {
  const { name, email, password, img } = Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedpassword = await bcrypt.hash(password, salt);
  try {
    connectDb();
    const newUser = new User({
      name,
      email,
      password: hashedpassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
