
import React, { useState } from 'react'

export async function getServerSideProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await data.json()
    // console.log(res);

    return {
        props: { data: res }, // will be passed to the page component as props
    }
}


export default function Test({ data }) {
    const [datas, setData] = useState(data);
    console.log(datas)
    return (
        <>
            <h1>
                Hello there
            </h1>
            <div>
                <ul>
                    {
                        datas.map((res) => {
                            return (<>
                                <li>{res.name}{res.id}{res.username}</li>
                            </>)
                        })
                    }
                </ul>
            </div>
        </>
    )
}
