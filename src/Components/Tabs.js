import React,{useState} from "react";


const Tabs = ({tabs}) => {
   let [tabClicked, setTabClicked] = useState("");

    return(
        <div>
             {
                 tabs.map((value)=>(
                      <p onClick={()=>setTabClicked(value)}>{value.title}</p>
                 ))
             }
              {
              tabClicked &&
                <p>Clicked Tab:  {tabClicked.content}</p>
              }
        </div>
    )
}


export default Tabs;