import { useMutation, gql } from "@apollo/client"

const graphqlSet = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents)
    }
`


export default function GraphqlMutationPage() {

    const [myFunc] = useMutation(graphqlSet)

    const onClickSubmit = async () => {
        const result = await myFunc({
            variables: {    // $ => variables   same mean
                writer: "sw",
                title: "army",
                contents: "tiger",
            }
        })
    }

    return <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>


}