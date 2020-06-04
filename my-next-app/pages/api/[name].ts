import { NowRequest, NowResponse } from '@now/node'

export default (request: NowRequest, response: NowResponse) => {
    const {name } = request.query
    response.status(200).send(`Hoi ${name}!`);
}