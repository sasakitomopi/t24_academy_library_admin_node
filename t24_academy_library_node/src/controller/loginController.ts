import * as Express from "express";
import { findByEmail } from "../service/accountService";
import ErrorConst from "../constans/ErrorConst";
import { signIn, signUp } from "../../lib/auth";
import { User } from "firebase/auth"
import AuthorizationType from "../constans/AuthorizationTypeName";

export default {
    // 初期表示
    index(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        const param = {
            "error": "",
            "logout": ""
        }
        res.render("./login.ejs", param);
    }
    ,
    // ログイン押下時
    async login(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const count = await findByEmail(email);

            if (count > 0) {
                const param = {
                    "error": ErrorConst.error,
                    "logout": ""
                }
                res.render("./login.ejs", param);
            }
            const user: User = signIn(email, password);
            res.send("success!!!");
        } catch {
            res.status(401).send("Login faild!!");
        }
    }
};
