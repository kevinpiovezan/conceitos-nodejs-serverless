import { todos } from "./createTodos"
import { document } from "src/utils/dynamodbClient";
export const handle = async (event) => {
    const user_id = event.pathParameters.user_id;
    // const todo = await document.query({
    //     TableName: 'conceitosnodejs',
    //     KeyConditionExpression: 'user_id = :user_id',
    //     ExpressionAttributeValues: {
    //         ':user_id': user_id
    //     }}).promise();
    return {
        statusCode: 200,
        body: JSON.stringify(todos.filter((todo) => todo.user_id === user_id))
    }
}