import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * メールアアドレスを取得する
 * @param email メールアドレス
 * @returns 
 */
export const count = async (email: string): Promise<number | undefined> => {
    const count: number = await prisma.accounts.count({
        where: {
            email: email
        }
    }).then(async () => {
        await prisma.$disconnect();
        return count;
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

    return count;
}

/**
 * 会員情報をアカウントマスタに登録する
 * @param email メールアドレス
 * @param password パスワード
 * @param employeeId 社員番号
 * @param name 社員名
 * @param authorizationType 権限区分
 * @returns アカウント情報
 */
export const accounts = async function register(email: string, password: string, employeeId: string, name: string, authorizationType: number) {
    const accounts = await prisma.accounts.create({
        data: {
            employee_id: employeeId,
            name: name,
            email: email,
            password: password,
            authorization_type: authorizationType
        }
    }).then(async () => {
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

    return accounts;
}
