import {v4 as uuidv4} from 'uuid';
import { document } from 'src/utils/dynamodbClient';
export const todos: IEvent[] = [];
interface IEvent {
    id?: string,
    user_id: string,
    title: string,
    done: boolean,
    deadline: Date,
}
export const handle = async (event) => {
    const {user_id, title, done, deadline} = JSON.parse(event.body) as IEvent;
    const id = uuidv4();
    const todo = Object.assign({id, user_id, title, done, deadline});
    todos.push(todo);
    // await document.put({
    //         TableName: 'conceitosnodejs',
    //         Item: todo
    //     }).promise();
    return {
        statusCode: 201,
        body: JSON.stringify(todos),
        headers: {
            'Content-type': 'application/json'
        }
    }
}