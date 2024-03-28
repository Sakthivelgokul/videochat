import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const db = await mongoose.connect("mongodb+srv://ksakthivel805697:O86MDBXt2nR9uHkC@cluster.ycipdb2.mongodb.net/?retryWrites=true&w=majority&appName=cluster", {
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
