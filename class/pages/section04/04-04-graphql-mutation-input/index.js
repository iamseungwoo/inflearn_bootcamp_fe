import { useMutation, gql } from "@apollo/client";
import { useState } from 'react';

const graphqlSet = gql`
    mutation createBoard($writer: String, $title: String, $contents: String) {
        createBoard(writer: $writer, title: $title, contents: $contents)
    }
`;

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState()
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const [myFunc] = useMutation(graphqlSet);


    const onClickSubmit = async () => {
        const result = await myFunc({
            variables: {
                // $ => variables   same mean
                writer: writer,
                title: title,
                contents: contents,
            },
        });
    };

    const onChangeWriter = (event) => {
        setWriter(event.target.value);
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onChangeContents = (event) => {
        setContents(event.target.value);
    }

    return (
        <div>
            author: <input type="text" onChange={onChangeWriter}/>
            title: <input type="text" onChange={onChangeTitle}/>
            contents: <input type="text" onChange={onChangeContents}/>
            <button onClick={onClickSubmit}>GraphQl-API 요청하기</button>
        </div>
    );
}
