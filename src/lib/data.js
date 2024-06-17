import { Post, User } from "./model";
import { connectDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
export const getPosts = async () => {
  try {
    connectDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (Id) => {
  noStore();
  try {
    connectDb();
    const user = await User.findById(Id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async () => {
  try {
    connectDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
