import board from "../../board";

export default {
    Query: {
        getBoardList: () => {
            return board.selectAll();
        },

        getBoardDetail: (_: any, { id }: any) => {
            return board.selectOne(id);
        }
    },

    Mutation: {
        boardCreate: (_:any, { input }: { input: {title: string, content: string}}) => {
            console.log(input.title, input.content);

            let result = {
                success: true,
              }
              return result
        }
    }
};