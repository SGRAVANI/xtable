import React, { useState } from 'react'
import styles from "./style.module.css"
let initialData=[{ date: "2022-09-01", views: 100, article: "Article 1" },
{ date: "2023-09-01", views: 100, article: "Article 1" },
{ date: "2023-09-02", views: 150, article: "Article 2" },
{ date: "2023-09-02", views: 120, article: "Article 3" },
{ date: "2020-09-03", views: 200, article: "Article 4" }
]


export default function XTable() {
    let [data,setData]=useState(initialData)
    function generateInitialTable()
    {console.log(data)
        let list=data.map((ele,index)=>{return <tr key={`i${index}`}>
            <td>{ele.date}</td>
            <td>{ele.views}</td>
            <td>{ele.article}</td>
        </tr>})
        return list;

    }
    function handleDate()
    {
    let newData= [...initialData].sort((a,b)=>{
      return new Date(b.date)-new Date(a.date);
      })
      setData(newData)
    }
    function handleViews()
    {
       let newData= [...initialData].sort((a,b)=>{
            return b.views-a.views
        })
        console.log(newData)
        setData(newData)
    }

  return (
    <div className={styles.container}>
        <h1>Date and Views Table</h1>
         <div className={styles.btnContainer}>
            <button className={styles.left} onClick={handleDate}>Sort by Date</button>
            <button className={styles.right} onClick={handleViews}>Sort by Views</button>
         </div>
         <table width="35%">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Views</th>
                    <th>Article</th>
                </tr>
               
            </thead>
             <tbody>
                {generateInitialTable()}
             </tbody>
         </table>
    </div>
  )
}
