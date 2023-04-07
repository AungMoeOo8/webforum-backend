import { Request, Response } from "express";
import { User } from "../models";
import { IUser, MyRequest, MyResponse } from "../types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALTROUNDS = 4;
const AUTHSECRET = process.env.AUTHSECRET || "verysecuresecret";

export default class AuthController {
  /**
   *
   * register steps
   *
   * 1. get email and password from request body | reject if some field are missing
   *
   * 2. find user with request email | reject if user exits
   *
   * 3. hash the request password and create user with that password
   *
   * 4. generate token and send back
   *
   */
  public static async register(
    req: MyRequest<{ username: string; email: string; password: string }>,
    res: Response
  ) {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res
        .status(401)
        .json({ success: false, message: "invalid request", token: null });
      return;
    }

    let result = await User.findOne({ email });

    if (result) {
      res.status(401).json({
        success: false,
        message: "User already exists!",
        token: null,
      });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, SALTROUNDS);

    result = await User.create({ email, password: hashedPassword });

    if (!result) {
      res.status(401).json({
        success: false,
        message: "Cannot create account!",
        token: null,
      });
      return;
    }

    const payload = {
      id: result.id,
      email,
    };

    const token = jwt.sign(payload, AUTHSECRET, { expiresIn: 60 });

    res.json({
      success: true,
      message: "Account created",
      token,
    });
  }

  /**
   *
   * login steps
   *
   * 1. get email and password from request body | reject if some field are missing
   *
   * 2. find user with request email | reject if user does not exit
   *
   * 3. compare hashed password with request password | reject if they do not match
   *
   * 4. generate token and send back
   *
   */

  public static async login(
    req: MyRequest<{ email: string; password: string }>,
    res: Response
  ) {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(401)
        .json({ success: false, message: "invalid request", token: null });
      return;
    }

    const result = await User.findOne({ email });

    if (!result) {
      res
        .status(401)
        .json({ success: false, message: "User not found", token: null });
      return;
    }

    const isPasswordCorrect = await bcrypt.compare(password, result.password);

    if (!isPasswordCorrect) {
      res
        .status(401)
        .json({ success: false, message: "Incorrect password!", token: null });
      return;
    }

    const payload = {
      id: result.id,
      email,
    };

    const token = jwt.sign(payload, AUTHSECRET, { expiresIn: 60 });

    res.json({
      success: true,
      message: "logged in",
      token,
    });
  }
}
