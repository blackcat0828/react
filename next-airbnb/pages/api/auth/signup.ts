import { NextApiRequest, NextApiResponse } from "next";
import Data from "../../../lib/data";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { StoredUserType } from "../../../types/user";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST"){
        const { email, firstname, lastname, password, birthday } = req.body;

        if (!email || !firstname || !lastname || !password || !birthday){
            res.statusCode = 400;
            return res.send("필수 데이터가 없습니다.");
        }

        const userExist = Data.user.exist({ email });
        console.log("유저 존재 확인 " + userExist);
        if(userExist){
            console.log("이미가입");
            res.statusCode = 409;
            return res.send("이미 가입된 이메일입니다.")
        }
        const hashedPassword = bcrypt.hashSync(password, 8);

        const users = Data.user.getList();
        let userId;
        if (users.length === 0){
            userId = 1;
        }else {
            userId = users[users.length -1].id + 1;
        }

        const newUser: StoredUserType = {
            id: userId,
            email,
            firstname,
            lastname,
            password: hashedPassword,
            birthday,
            profileImage: "/static/image/user/default_user_profile_image.jpg",
        };

        Data.user.write([...users, newUser]);

        const token = jwt.sign(String(newUser.id), process.env.JWT_SECRET!);

        res.setHeader(
            "Set-Cookie",
            `access_token=${token}; path=/; expires=${new Date(
              Date.now() + 60 * 60 * 24 * 1000 * 3 //3일
            ).toUTCString()}; httponly`
          );
        
        //Partial은 Typescript의 유틸리티중 하나로 StoredUserType의 password 속성을 Partial로 만든
        //타입을 만들게 된다.
        const newUserWithoutPassword: Partial<Pick<StoredUserType, "password">> = newUser;

        delete newUserWithoutPassword.password;
        res.statusCode = 200;
        return res.send(newUser);
    }

    
    res.statusCode = 405;
    return res.end();
}