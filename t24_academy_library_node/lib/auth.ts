import { FirebaseError } from "firebase/app";
import { User, UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, app, db } from './firebase';

/**
 * 新規登録機能
 * @param email メール 
 * @param password パスワード
 */
export async function signUp(email: string, password: string): Promise<User | null> {
    console.log('SignUp Start');
    try {
        const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('SignUp End');
        return user;
    } catch (error: unknown) {
        console.log('SignUp Error');
        if (error instanceof FirebaseError) {
            console.error(error);
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode);
            console.error(errorMessage);
        } else {
            console.error('An unknown error occurred');
        }
        return null;
    }
}

/**
 * ログイン機能
 * @param email メールアドレス
 * @param password パスワード
 */
export function signIn(email: string, password: string): User {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential: UserCredential) => {
            const user = userCredential.user;
            return user;
        })
        .catch((error: unknown) => {
            if (error instanceof FirebaseError) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode);
                console.error(errorMessage);
            } else {
                console.error('An unknown error occurred');
            }
        })
    throw FirebaseError;
}