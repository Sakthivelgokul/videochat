import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const db = await mongoose.connect("url", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then(() => console.log("Database was connected"))
    return db
  }
  catch (err) {
    console.log(err)
    return err
  }

}
export default connectDb
