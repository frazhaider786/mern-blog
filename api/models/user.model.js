import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String,
      default: "https://www.bing.com/images/search?view=detailV2&ccid=tmgWGdzG&id=73FCD0D09D76D2AED5BEE4F9DED8614488FE5E9C&thid=OIP.tmgWGdzGFmIwg1iaqCbSvgHaHa&mediaurl=https%3a%2f%2fwisdomexperience.org%2fwp-content%2fuploads%2f2019%2f10%2fblank-profile-picture-973460_960_720.png&exph=720&expw=720&q=Blank+Profile&simid=608009985046415874&FORM=IRPRST&ck=C45DB1FF933574B2852CB702A76BF04C&selectedIndex=12&itb=0",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
