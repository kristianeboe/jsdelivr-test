import { User } from "./interfaces/index";

const sayHello = (user: User): string => `Hello ${user.name}!`;

export default sayHello;
