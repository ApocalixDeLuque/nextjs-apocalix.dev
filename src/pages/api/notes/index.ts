import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../components/utils/connection';

interface ResponseFuncs {
    GET?: Function;
    POST?: Function;
    PUT?: Function;
    DELETE?: Function;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    //capture request method, we type it as a key of ResponseFunc to reduce typing later
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

    //function for catch errors
    const catcher = (error: Error) => res.status(400).json({ error });

    // Potential Responses
    const handleCase: ResponseFuncs = {
        // RESPONSE FOR GET REQUESTS
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Note } = await connect(); // connect to database
            const notes = await Note.find({}).catch(catcher);
            res.json(notes);
        },
        // RESPONSE POST REQUESTS
        POST: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Note } = await connect(); // connect to database
            res.json(await Note.create(req.body).catch(catcher));
        }
    };

    // Check if there is a response for the particular method, if so invoke it, if not response with an error
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ error: 'No Response for This Request' });
};

export default handler;
