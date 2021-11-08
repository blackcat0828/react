import { NextApiResponse, NextApiRequest } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("test.ts 옴?")

    res.statusCode = 405;
    return res.end();
}