import { count as findByEmailCount, accounts as accountRegist } from "../repository/accountRepository";

export async function findByEmail(email: string): Promise<number> {
    try {
        const count = await findByEmailCount(email);
        if (typeof count === "undefined") {
            throw Error("DatabaseError");
        }
        return count;
    } catch (e) {
        throw e;
    }
}

/**
 * アカウントマスタにデータを登録する。
 * @param email メールアドレス
 * @param password パスワード
 * @param employeeId 社員番号
 * @param name 社員名
 * @param authorizationType 権限区分
 */
export async function register(email: string, password: string, employeeId: string, name: string, authorizationType: number) {
    try {
        const accounts = accountRegist(email, password, employeeId, name, authorizationType);
        return accounts;
    } catch (e) {
        throw e;
    }
}