import { Router } from 'express';
import user  from '../controllers/UserController';
import {authenticateToken} from '../middlewares/jwt'
const routes = Router();

routes.post('/cadastro', user.Cadastrar_Novo_Usuario);
routes.post('/login', user.Login);
routes.post('/dados', user.determinarPerfil);
routes.get("/obter",authenticateToken, user.obterDados);
export default routes;