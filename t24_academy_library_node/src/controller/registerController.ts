import * as Express from "express";
import { signUp } from "../../lib/auth";
import { register } from "../service/accountService";
import authorizationTypeList from "../constans/AuthorizationTypeName";

export default {
    // 初期表示
    index(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        const param = {
            authorizationTypeList: authorizationTypeList
        }

        res.render("./register.ejs", param);
    }
    ,
    // 登録ボタン押下時
    async signUp(req: Express.Request, res: Express.Response, next: Express.NextFunction) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const employeeId = req.body.employeeId;
            const name = req.body.name;
            const authorizationType = Number.parseInt(req.body.authorizationType);

            // 会員登録はFirebaseを使って登録(パスワード保護のため)
            const user = await signUp(email, password);

            if (!user || !user.uid) {
                throw Error("SignUp uid Not Found");
            }
            // その他アカウント情報はアカウントマスタにデータを登録する
            const accounts = register(email, user.uid, employeeId, name, authorizationType);
            console.log(accounts);
            res.send("success!!!");

        } catch (e) {
            console.error(e);
            res.status(401).send("SignUp faild!!");
        }
    }
}