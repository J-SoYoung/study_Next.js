import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handle(req, res) {
  if (req.method == "POST") {
    const hash = await bcrypt.hash(req.body.password, 10);
    req.body.password = hash;

    const db = (await connectDB).db("forum");
    await db.collection("user_cred").insertOne(req.body);
    console.log(req.body);
    return res.status(200).json("가입성공");
  }
}