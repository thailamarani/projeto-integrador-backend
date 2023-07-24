import { UserBusiness } from '../business/UserBusiness';
import { Request, Response } from 'express-serve-static-core';
import { ZodError } from 'zod';
import { BaseError } from '../errors/BaseError';
import { SignupSchema } from '../dtos/user/signup.dto';
import { LoginSchema } from '../dtos/user/login.dto';

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        try {
            const input = SignupSchema.parse({
                nickname: req.body.nickname,
                email: req.body.email,
                password: req.body.password
            })

            const response = await this.userBusiness.signup(input)

            res.status(201).send(response)

        } catch (error) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    };

    public login = async (req: Request, res: Response) => {
        try {
            const input = LoginSchema.parse({
                email: req.body.email,
                password: req.body.password
            })

            const response = await this.userBusiness.login(input)

            res.status(201).send(response)

        } catch (error) {
            console.log(error)

            if (error instanceof ZodError) {
                res.status(400).send(error.issues)
            } else if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    };
};