import { useMutation, gql } from "@apollo/client"

const graphqlSet = gql`
    mutation{
        createBoard(writer: "chulsoo", title: "hello", contents: "world")
    }
`


export default function GraphqlMutationPage() {

    const [myFunc] = useMutation(graphqlSet)

    const onClickSubmit = async () => {
        const result = await myFunc()
        console.log(result)
    }

    return <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>


}